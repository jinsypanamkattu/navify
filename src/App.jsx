import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import UserListing from './pages/UserListing';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';


// App Component
const App = () => (
  <Router>
    
    <Header />
    
    <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserListing />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;