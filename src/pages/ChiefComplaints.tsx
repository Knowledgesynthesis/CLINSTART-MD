import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { conditions } from '@/data/conditions';
import type { ChiefComplaint } from '@/types';

const complaintNames: Record<ChiefComplaint, string> = {
  'chest-pain': 'Chest Pain',
  dyspnea: 'Dyspnea (Shortness of Breath)',
  'abdominal-pain': 'Abdominal Pain',
  syncope: 'Syncope',
  'altered-mental-status': 'Altered Mental Status',
  fever: 'Fever',
  trauma: 'Trauma',
  palpitations: 'Palpitations',
  weakness: 'Weakness',
  headache: 'Headache',
  bleeding: 'Bleeding',
};

export function ChiefComplaints() {
  // Group conditions by chief complaint
  const complaintGroups = conditions.reduce((acc, condition) => {
    if (condition.chiefComplaints) {
      condition.chiefComplaints.forEach((complaint) => {
        if (!acc[complaint]) {
          acc[complaint] = [];
        }
        acc[complaint].push(condition);
      });
    }
    return acc;
  }, {} as Record<ChiefComplaint, typeof conditions>);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Chief Complaints</h1>
        <p className="text-muted-foreground">
          Find conditions by presenting symptom or complaint
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {Object.entries(complaintGroups).map(([complaint, conditionsList]) => (
          <Card key={complaint}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                {complaintNames[complaint as ChiefComplaint]}
                <Badge variant="secondary">{conditionsList.length} conditions</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {conditionsList.map((condition) => (
                  <Link key={condition.id} to={`/condition/${condition.id}`}>
                    <div className="p-3 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                      <h3 className="font-medium text-sm mb-1">{condition.name}</h3>
                      <p className="text-xs text-muted-foreground capitalize">
                        {condition.specialty.replace('-', ' ')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
