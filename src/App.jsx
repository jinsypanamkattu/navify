import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


// App Component
const App = () => (
  
    <>
    <Header />
    
    <main className="flex-grow-1">
      <Outlet />
    </main>
    <Footer />
    </>
);

export default App;