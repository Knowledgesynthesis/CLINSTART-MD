import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { AlertTriangle, Activity, Target } from 'lucide-react';

interface ThreeColumnCardProps {
  stabilization: string[];
  initialTests: string[];
  mostAccurateTests: string[];
}

export function ThreeColumnCard({
  stabilization,
  initialTests,
  mostAccurateTests,
}: ThreeColumnCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Stabilization Column */}
      <Card className="border-l-4 border-l-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Immediate Stabilization (ABCs)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {stabilization.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Initial Tests Column */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Activity className="h-5 w-5 text-primary" />
            Initial Diagnostic Test(s)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {initialTests.map((test, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm">{test}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Most Accurate Tests Column */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="h-5 w-5 text-green-500" />
            Most Accurate Test(s)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mostAccurateTests.map((test, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span className="text-sm font-medium">{test}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
