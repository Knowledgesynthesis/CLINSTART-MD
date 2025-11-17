import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Info, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ThreeColumnCard } from '@/components/ThreeColumnCard';
import { conditions } from '@/data/conditions';
import { useStore } from '@/stores/useStore';

export function Condition() {
  const { id } = useParams<{ id: string }>();
  const { toggleFavorite, addToLastVisited, userProgress } = useStore();

  const condition = conditions.find((c) => c.id === id);

  React.useEffect(() => {
    if (condition) {
      addToLastVisited(condition.id);
    }
  }, [condition, addToLastVisited]);

  if (!condition) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Condition Not Found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  const isFavorite = userProgress.favoriteConditions.includes(condition.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <Link to="/specialties">
            <Button variant="ghost" size="sm" className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Specialties
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">{condition.name}</h1>
          <div className="flex gap-2">
            <Badge variant="secondary" className="capitalize">
              {condition.specialty.replace('-', ' ')}
            </Badge>
            {condition.chiefComplaints?.map((complaint) => (
              <Badge key={complaint} variant="outline" className="capitalize">
                {complaint.replace('-', ' ')}
              </Badge>
            ))}
          </div>
        </div>
        <Button
          variant={isFavorite ? 'default' : 'outline'}
          size="icon"
          onClick={() => toggleFavorite(condition.id)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Star className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
      </div>

      {/* Three Column Framework */}
      <ThreeColumnCard
        stabilization={condition.stabilization}
        initialTests={condition.initialTests}
        mostAccurateTests={condition.mostAccurateTests}
      />

      {/* Red Flags */}
      <Card className="border-l-4 border-l-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {condition.redFlags.map((flag, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-destructive mt-1">⚠</span>
                <span className="text-sm">{flag}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Pitfalls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-5 w-5" />
            Common Pitfalls to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {condition.pitfalls.map((pitfall, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span className="text-sm">{pitfall}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Clinical Notes */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Info className="h-5 w-5" />
            Clinical Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{condition.notes}</p>
        </CardContent>
      </Card>

      {/* Related Resources */}
      <div className="flex gap-4">
        <Link to="/cases" className="flex-1">
          <Button variant="outline" className="w-full">
            Practice with Cases
          </Button>
        </Link>
        <Link to="/assessment" className="flex-1">
          <Button variant="outline" className="w-full">
            Test Your Knowledge
          </Button>
        </Link>
      </div>
    </div>
  );
}
