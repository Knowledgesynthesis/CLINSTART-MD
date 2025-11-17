import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Activity, CheckCircle2 } from 'lucide-react';
import { cases } from '@/data/cases';
import { conditions } from '@/data/conditions';
import { useStore } from '@/stores/useStore';

export function Cases() {
  const navigate = useNavigate();
  const { userProgress } = useStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Case Simulations</h1>
        <p className="text-muted-foreground">
          Practice clinical decision-making with realistic patient scenarios
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {cases.map((caseScenario) => {
          const condition = conditions.find((c) => c.id === caseScenario.conditionId);
          const isCompleted = userProgress.completedCases.includes(caseScenario.id);

          return (
            <Card key={caseScenario.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{caseScenario.title}</CardTitle>
                      {isCompleted && (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <CardDescription>
                      <Badge variant="secondary" className="capitalize">
                        {condition?.name}
                      </Badge>
                    </CardDescription>
                  </div>
                  <Activity className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {caseScenario.presentation}
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">HR:</span>{' '}
                    <span className="font-medium">{caseScenario.vitals.hr}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">BP:</span>{' '}
                    <span className="font-medium">{caseScenario.vitals.bp}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">SpO2:</span>{' '}
                    <span className="font-medium">{caseScenario.vitals.spo2}%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Temp:</span>{' '}
                    <span className="font-medium">{caseScenario.vitals.temp}°C</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate(`/case/${caseScenario.id}`)}
                  className="w-full"
                >
                  {isCompleted ? 'Review Case' : 'Start Case'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
