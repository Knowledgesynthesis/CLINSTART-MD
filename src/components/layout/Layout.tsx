import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-6">
        <Outlet />
      </main>
      <footer className="border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            ClinStart MD © 2024 - Educational Use Only
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Not a substitute for clinical judgment
          </p>
        </div>
      </footer>
    </div>
  );
}
