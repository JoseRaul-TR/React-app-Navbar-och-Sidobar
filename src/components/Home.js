import React from "react";
import perezosoImage from "./assets/perezoso.jpg";

export default function Home() {
    return (
        <div className="container mt-4 p-4 bg-white rounded shadow-sm d-flex flex-column align-items-center text-center">
            <h1 className="mb-3 fw-bold">Min App</h1>
            <h3 className="mb-2 text-muted">Välkommen!</h3>
            <p className="lead">Snart kommer innehållet att visas här.</p>
            <img 
                src={perezosoImage} 
                alt="Sengångare bild"
                style={{
                    maxWidth: '300px',
                    margin: '1rem 0'
                }}
            />
        </div>
    );
}