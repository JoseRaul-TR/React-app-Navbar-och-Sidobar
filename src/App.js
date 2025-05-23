import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Uppgift2 from "./pages/Uppgift2";
import Uppgift3 from "./pages/Uppgift3";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <div className="sidebar bg-light p3">
          <Sidebar />
        </div>
        <main className="main-content">
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
