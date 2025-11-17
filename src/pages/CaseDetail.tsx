import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cases } from '@/data/cases';
import { conditions } from '@/data/conditions';
import { useStore } from '@/stores/useStore';

export function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const { addCompletedCase } = useStore();
  const [selectedStabilization, setSelectedStabilization] = useState<string[]>([]);
  const [selectedInitialTests, setSelectedInitialTests] = useState<string[]>([]);
  const [selectedMostAccurate, setSelectedMostAccurate] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);

  const caseScenario = cases.find((c) => c.id === id);
  const condition = caseScenario
    ? conditions.find((c) => c.id === caseScenario.conditionId)
    : null;

  if (!caseScenario || !condition) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Case Not Found</h1>
        <Link to="/cases">
          <Button>Back to Cases</Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = () => {
    setShowFeedback(true);
    addCompletedCase(caseScenario.id);
  };

  const toggleSelection = (item: string, list: string[], setter: (items: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter((i) => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  return (
    <div className="space-y-6">
      <Link to="/cases">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cases
        </Button>
      </Link>

      <div>
        <h1 className="text-4xl font-bold mb-2">{caseScenario.title}</h1>
        <Badge variant="secondary">{condition.name}</Badge>
      </div>

      {/* Patient Presentation */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Presentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">{caseScenario.presentation}</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-muted rounded-lg">
            <div>
              <div className="text-xs text-muted-foreground">Heart Rate</div>
              <div className="text-lg font-semibold">{caseScenario.vitals.hr} bpm</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Blood Pressure</div>
              <div className="text-lg font-semibold">{caseScenario.vitals.bp} mmHg</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Respiratory Rate</div>
              <div className="text-lg font-semibold">{caseScenario.vitals.rr} /min</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Temperature</div>
              <div className="text-lg font-semibold">{caseScenario.vitals.temp}°C</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">SpO2</div>
              <div className="text-lg font-semibold">{caseScenario.vitals.spo2}%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {!showFeedback ? (
        <>
          {/* Stabilization Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Immediate Stabilization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Select all appropriate stabilization measures:
              </p>
              <div className="space-y-2">
                {condition.stabilization.map((item, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      toggleSelection(item, selectedStabilization, setSelectedStabilization)
                    }
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedStabilization.includes(item)
                        ? 'bg-primary/10 border-primary'
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded border ${
                          selectedStabilization.includes(item)
                            ? 'bg-primary border-primary'
                            : 'border-muted-foreground'
                        }`}
                      >
                        {selectedStabilization.includes(item) && (
                          <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Initial Tests Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Initial Diagnostic Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Select the appropriate initial tests:
              </p>
              <div className="space-y-2">
                {condition.initialTests.map((test, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      toggleSelection(test, selectedInitialTests, setSelectedInitialTests)
                    }
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedInitialTests.includes(test)
                        ? 'bg-primary/10 border-primary'
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded border ${
                          selectedInitialTests.includes(test)
                            ? 'bg-primary border-primary'
                            : 'border-muted-foreground'
                        }`}
                      >
                        {selectedInitialTests.includes(test) && (
                          <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                      <span className="text-sm">{test}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Most Accurate Test Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Most Accurate Test</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Select the gold-standard confirmatory test:
              </p>
              <div className="space-y-2">
                {condition.mostAccurateTests.map((test, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedMostAccurate(test)}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedMostAccurate === test
                        ? 'bg-green-500/10 border-green-500'
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border ${
                          selectedMostAccurate === test
                            ? 'bg-green-500 border-green-500'
                            : 'border-muted-foreground'
                        }`}
                      />
                      <span className="text-sm font-medium">{test}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button onClick={handleSubmit} className="w-full" size="lg">
            Submit Answers
          </Button>
        </>
      ) : (
        <>
          {/* Feedback Section */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Stabilization</h3>
                <p className="text-sm text-muted-foreground">{caseScenario.feedback.stabilization}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Initial Tests</h3>
                <p className="text-sm text-muted-foreground">{caseScenario.feedback.initialTests}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Most Accurate Test</h3>
                <p className="text-sm text-muted-foreground">
                  {caseScenario.feedback.mostAccurateTest}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Link to="/cases" className="flex-1">
              <Button variant="outline" className="w-full">
                Back to Cases
              </Button>
            </Link>
            <Link to={`/condition/${condition.id}`} className="flex-1">
              <Button className="w-full">Review Condition</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
