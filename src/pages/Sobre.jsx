import React, { useEffect } from 'react';
import './Sobre.css';
import { Target, Award, Users, Search, CheckCircle, MapPin } from 'lucide-react';

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sobre-page">
      {/* 1. Hero / Banner Section */}
      <section className="sobre-hero">
        <div className="sobre-overlay"></div>
        <div className="sobre-hero-content">
          <h1>Sobre Nós</h1>
          <p>Evolutec • Quem Somos</p>
        </div>
      </section>

      {/* 2. About Section (Image Left, Text Right) */}
      <section className="sobre-about-section">
        <div className="container about-container">
          <div className="about-images">
            <div className="img-wrapper main-img">
              <img src="/formatura5.jpeg" alt="Equipe Evolutec" />
            </div>
            <div className="img-wrapper sub-img">
              <img src="/formatura6.jpeg" alt="Alunos estudando" />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Anos de<br/>Experiência</span>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <span className="section-subtitle">SOBRE A EVOLUTEC</span>
            <h2 className="section-title">O caminho mais rápido para o seu <span className="highlight">sucesso profissional</span></h2>
            <p className="section-desc">
              A Evolutec é referência em ensino profissionalizante no Pará, transformando vidas através da educação. 
              Nosso objetivo é preparar jovens e adultos para os desafios do mercado de trabalho com excelência e inovação.
            </p>
            
            <div className="about-features">
              <div className="feature-col">
                <div className="feature-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span>Metodologia Prática</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span>Certificado Reconhecido</span>
                </div>
              </div>
              <div className="feature-col">
                <div className="feature-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span>Professores Especialistas</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span>Aulas Dinâmicas</span>
                </div>
              </div>
            </div>

            <a href="#matricula" className="btn-primary">Conheça Nossos Cursos</a>
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="sobre-stats-bar">
        <div className="container stats-container">
          <div className="stat-box">
            <div className="stat-icon-bg">
               <Users size={32} />
            </div>
            <div className="stat-info">
              <span className="stat-number">15+</span>
              <span className="stat-label">Anos de História</span>
            </div>
          </div>
          
          <div className="stat-box">
            <div className="stat-icon-bg">
               <CheckCircle size={32} />
            </div>
            <div className="stat-info">
              <span className="stat-number">40k+</span>
              <span className="stat-label">Alunos Formados</span>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon-bg">
               <Award size={32} />
            </div>
            <div className="stat-info">
              <span className="stat-number">10+</span>
              <span className="stat-label">Prêmios de Qualidade</span>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon-bg">
               <Target size={32} />
            </div>
            <div className="stat-info">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfação dos Alunos</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission Section (Text Left, Image Right) */}
      <section className="sobre-mission-section">
        <div className="container mission-container">
          <div className="mission-text">
            <span className="section-subtitle">NOSSA MISSÃO</span>
            <h2 className="section-title">Nosso principal objetivo é qualificar você para o <span className="highlight-alt">Futuro</span></h2>
            
            <div className="mission-tabs">
              <button className="tab-btn active">Nossa Missão</button>
              <button className="tab-btn">Nossa Visão</button>
              <button className="tab-btn">Valores</button>
            </div>
            
            <div className="mission-content-box">
              <h3>Missão da Empresa</h3>
              <p>
                Democratizar o acesso ao ensino de qualidade, oferecendo cursos práticos e focados na realidade do mercado, 
                permitindo que nossos alunos conquistem sua independência financeira e realizem seus sonhos profissionais.
              </p>
              <p>
                Acreditamos que a educação é a ferramenta mais poderosa para transformar a realidade social e econômica de nossa região.
              </p>
            </div>
          </div>

          <div className="mission-image">
            <img src="/formatura3.jpeg" alt="Nossa Missão" />
          </div>
        </div>
      </section>

      {/* 5. Units Section */}
      <section className="sobre-units-section">
        <div className="container">
          <div className="units-header">
            <span className="section-subtitle">NOSSAS UNIDADES</span>
            <h2 className="section-title">Estamos perto de <span className="highlight">você</span></h2>
            <p className="section-desc">Encontre a unidade Evolutec mais próxima e comece sua transformação profissional hoje mesmo.</p>
          </div>
          
          <div className="units-grid">
            <div className="unit-card">
              <div className="unit-icon-bg">
                <MapPin size={32} />
              </div>
              <h3>Castanhal</h3>
              <p>Centro</p>
            </div>
            
            <div className="unit-card">
              <div className="unit-icon-bg">
                <MapPin size={32} />
              </div>
              <h3>Belém</h3>
              <p>São Brás</p>
            </div>
            
            <div className="unit-card">
              <div className="unit-icon-bg">
                <MapPin size={32} />
              </div>
              <h3>Ananindeua</h3>
              <p>Cidade Nova</p>
            </div>
            
            <div className="unit-card">
              <div className="unit-icon-bg">
                <MapPin size={32} />
              </div>
              <h3>Marituba</h3>
              <p>Centro</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
