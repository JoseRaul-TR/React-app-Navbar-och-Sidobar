import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Uppgift2 from './components/Uppgift2';
import Uppgift3 from './components/Uppgift3';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="container-fluid p-0 d-flex flex-column" style={{ minHeight: '100vh', width: '100vw', backgroundColor: '#f8f9fa' }}>
            <Navbar />
            <div className="row flex-column flex-md-row flex-nowrap">
                <div className="col-12 col-md-2 bg-light p-3">
                    <Sidebar />
                </div>
                <main className="col-md-10 p-4 d-flex flex-column">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/uppgift2" element={<Uppgift2 />} />
                        <Route path="/uppgift3" element={<Uppgift3 />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;