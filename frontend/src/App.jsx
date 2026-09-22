import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CaseProvider } from './context/CaseContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { CaseBank } from './pages/CaseBank';
import { StationWorkflow } from './pages/StationWorkflow';
import { Result } from './pages/Result';
import { Learn } from './pages/Learn';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <CaseProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cases" element={<CaseBank />} />
              <Route path="/workflow/:id" element={<StationWorkflow />} />
              <Route path="/result" element={<Result />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CaseProvider>
  );
}

export default App;
