import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Specialties } from '@/pages/Specialties';
import { ChiefComplaints } from '@/pages/ChiefComplaints';
import { Condition } from '@/pages/Condition';
import { Cases } from '@/pages/Cases';
import { CaseDetail } from '@/pages/CaseDetail';
import { Assessment } from '@/pages/Assessment';
import { Glossary } from '@/pages/Glossary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="specialties" element={<Specialties />} />
          <Route path="chief-complaints" element={<ChiefComplaints />} />
          <Route path="condition/:id" element={<Condition />} />
          <Route path="cases" element={<Cases />} />
          <Route path="case/:id" element={<CaseDetail />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="glossary" element={<Glossary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
