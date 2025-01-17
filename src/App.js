import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

import Home from './pages/Home';
import Modelle from './pages/Modelle';
import Galerie from './pages/Galerie';
import Animation from './pages/Animation';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/modelle" element={<Modelle />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path= "/animation" element={<Animation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
