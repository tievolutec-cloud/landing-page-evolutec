import React, { useState } from 'react';
import './autoridade.css';

const HeroEducation = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const stats = [
    { label: 'Alunos Formados', value: '5k+' },
    { label: 'Anos de História', value: '15+' },
    { label: 'Satisfação', value: '98%' },
  ];

  const graduationImages = [
    "formatura.webp",
    "formatura2.webp",
    "formatura3.webp",
    "formatura4.webp",
    "formatura5.webp",
    "formatura6.webp",

  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % graduationImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? graduationImages.length - 1 : prev - 1));
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="text-section">
          <h1 className="hero-title">
            Transformando Vidas <br />
            <span className="highlight">Através da Educação</span>
          </h1>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="image-section">
          <div className="image-wrapper">
            <img 
              src={graduationImages[currentImage]} 
              alt="Estudantes formados" 
              className="main-image"
             loading="lazy" decoding="async"/>
            
          </div>
          <div className="carousel-controls">
            <button className="nav-btn" onClick={prevImage}>←</button>
            <div className="dots">
              {graduationImages.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>
            <button className="nav-btn" onClick={nextImage}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEducation;