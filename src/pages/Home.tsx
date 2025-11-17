import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Stethoscope, FlaskConical, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { conditions } from '@/data/conditions';
import { useStore } from '@/stores/useStore';

export function Home() {
  const { searchQuery, setSearchQuery } = useStore();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const recentConditions = conditions.slice(0, 6);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    // Navigate to search results or filter conditions
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          ClinStart MD
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          First-Line Diagnosis & Stabilization Atlas
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Master the critical three-step approach: Stabilize (ABCs) → Initial Tests → Most Accurate Tests
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mt-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search conditions, symptoms, tests..."
                className="pl-10"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </div>
        </form>
      </section>

      {/* Quick Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/specialties">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Specialties</CardTitle>
              <CardDescription>Browse by medical specialty</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link to="/chief-complaints">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <Stethoscope className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Chief Complaints</CardTitle>
              <CardDescription>Start with presenting symptoms</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link to="/cases">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <FlaskConical className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Case Simulations</CardTitle>
              <CardDescription>Practice with realistic scenarios</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link to="/assessment">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader>
              <Award className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Assessment</CardTitle>
              <CardDescription>Test your knowledge</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>

      {/* Featured Conditions */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">High-Yield Conditions</h2>
          <Link to="/specialties">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentConditions.map((condition) => (
            <Link key={condition.id} to={`/condition/${condition.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{condition.name}</CardTitle>
                  <CardDescription className="capitalize">
                    {condition.specialty.replace('-', ' ')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Initial:</strong>{' '}
                      {condition.initialTests[0]}
                    </p>
                    <p>
                      <strong className="text-foreground">Most Accurate:</strong>{' '}
                      {condition.mostAccurateTests[0]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Framework */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">The ClinStart Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-l-4 border-l-destructive">
            <CardHeader>
              <CardTitle className="text-xl">1. Stabilize (ABCs)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Airway, Breathing, Circulation. Address immediate life threats first.
                Oxygen, IV access, vital interventions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-xl">2. Initial Test</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fast, accessible, sensitive. Gives direction and rules out emergencies.
                Examples: ECG, CT head, CXR.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl">3. Most Accurate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Gold-standard, definitive diagnosis. May be invasive or resource-intensive.
                Examples: Angiography, MRI, Endoscopy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
