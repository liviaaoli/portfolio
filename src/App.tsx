import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
        {/* Navbar aparece em todas as páginas */}
        <Navbar />

        {/* O conteúdo das páginas é renderizado aqui */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<About />} />
        </Routes>

        {/* Footer aparece em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;