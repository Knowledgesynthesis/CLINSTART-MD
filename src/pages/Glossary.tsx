import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { glossaryTerms } from '@/data/glossary';

export function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTerms = filteredTerms.sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Medical Glossary</h1>
        <p className="text-muted-foreground">
          Quick reference for medical terms, tests, and abbreviations
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search terms..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Glossary Terms */}
      <div className="grid grid-cols-1 gap-4">
        {sortedTerms.map((term) => (
          <Card key={term.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BookOpen className="h-5 w-5 text-primary" />
                {term.term}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed">{term.definition}</p>

              {term.relatedConditions && term.relatedConditions.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Related Conditions:</p>
                  <div className="flex flex-wrap gap-2">
                    {term.relatedConditions.map((conditionId) => (
                      <Link key={conditionId} to={`/condition/${conditionId}`}>
                        <Badge variant="outline" className="hover:bg-accent cursor-pointer">
                          {conditionId.replace('-', ' ')}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No terms found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}
