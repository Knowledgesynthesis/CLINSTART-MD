import { Link } from 'react-router-dom';
import { Moon, Sun, Activity } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ClinStart MD</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/specialties"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Specialties
          </Link>
          <Link
            to="/chief-complaints"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Chief Complaints
          </Link>
          <Link to="/cases" className="text-sm font-medium transition-colors hover:text-primary">
            Cases
          </Link>
          <Link
            to="/assessment"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Assessment
          </Link>
          <Link
            to="/glossary"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Glossary
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
