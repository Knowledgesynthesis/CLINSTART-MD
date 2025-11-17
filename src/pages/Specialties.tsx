import { Link } from 'react-router-dom';
import {
  Heart,
  Wind,
  Brain,
  Pill,
  Droplet,
  Microscope,
  Activity,
  Baby,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { conditions } from '@/data/conditions';
import type { Specialty } from '@/types';

const specialtyIcons: Record<Specialty, React.ReactNode> = {
  cardiology: <Heart className="h-6 w-6" />,
  pulmonology: <Wind className="h-6 w-6" />,
  neurology: <Brain className="h-6 w-6" />,
  gastroenterology: <Activity className="h-6 w-6" />,
  endocrinology: <Pill className="h-6 w-6" />,
  'infectious-disease': <Microscope className="h-6 w-6" />,
  nephrology: <Droplet className="h-6 w-6" />,
  'hematology-oncology': <Droplet className="h-6 w-6" />,
  'obstetrics-gynecology': <Baby className="h-6 w-6" />,
  pediatrics: <Baby className="h-6 w-6" />,
  'emergency-medicine': <Activity className="h-6 w-6" />,
};

const specialtyNames: Record<Specialty, string> = {
  cardiology: 'Cardiology',
  pulmonology: 'Pulmonology',
  neurology: 'Neurology',
  gastroenterology: 'Gastroenterology',
  endocrinology: 'Endocrinology',
  'infectious-disease': 'Infectious Disease',
  nephrology: 'Nephrology',
  'hematology-oncology': 'Hematology/Oncology',
  'obstetrics-gynecology': 'OB/GYN',
  pediatrics: 'Pediatrics',
  'emergency-medicine': 'Emergency Medicine',
};

export function Specialties() {
  // Group conditions by specialty
  const specialtyGroups = conditions.reduce((acc, condition) => {
    if (!acc[condition.specialty]) {
      acc[condition.specialty] = [];
    }
    acc[condition.specialty].push(condition);
    return acc;
  }, {} as Record<Specialty, typeof conditions>);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Specialties</h1>
        <p className="text-muted-foreground">
          Browse conditions organized by medical specialty
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {Object.entries(specialtyGroups).map(([specialty, conditionsList]) => (
          <Card key={specialty}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="text-primary">
                  {specialtyIcons[specialty as Specialty]}
                </div>
                {specialtyNames[specialty as Specialty]}
                <Badge variant="secondary">{conditionsList.length} conditions</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {conditionsList.map((condition) => (
                  <Link key={condition.id} to={`/condition/${condition.id}`}>
                    <div className="p-3 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                      <h3 className="font-medium text-sm mb-1">{condition.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {condition.initialTests[0]}
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
