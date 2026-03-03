import React, { useEffect } from 'react';
import './Sobre.css';
import { Target, Award, Users, Search, CheckCircle, MapPin } from 'lucide-react';

const Sobre = () => {
  const [activeTab, setActiveTab] = React.useState('missao');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'missao':
        return (
          <div className="mission-content-box animate-fade-in">
            <h3>Missão da Empresa</h3>
            <p>
              Democratizar o acesso ao ensino de qualidade, oferecendo cursos práticos e focados na realidade do mercado, 
              permitindo que nossos alunos conquistem sua independência financeira e realizem seus sonhos profissionais.
            </p>
            <p>
              Acreditamos que a educação é a ferramenta mais poderosa para transformar a realidade social e econômica de nossa região.
            </p>
          </div>
        );
      case 'visao':
        return (
          <div className="mission-content-box animate-fade-in">
            <h3>Nossa Visão</h3>
            <p>
              Ser reconhecida como a maior e melhor rede de ensino profissionalizante do Norte do Brasil, 
              sendo referência em inovação pedagógica, empregabilidade e impacto social positivo.
            </p>
            <p>
              Queremos expandir fronteiras e levar oportunidades reais de crescimento para cada vez mais pessoas.
            </p>
          </div>
        );
      case 'valores':
        return (
          <div className="mission-content-box animate-fade-in">
            <h3>Nossos Valores</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><strong>• Excelência:</strong> Comprometimento com a qualidade superior em tudo que fazemos.</li>
              <li style={{ marginBottom: '12px' }}><strong>• Inovação:</strong> Busca constante por novas metodologias e tecnologias de ensino.</li>
              <li style={{ marginBottom: '12px' }}><strong>• Ética:</strong> Transparência, integridade e respeito em todas as relações.</li>
              <li><strong>• Resultado:</strong> Foco total no sucesso e na transformação de vida dos nossos alunos.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

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
              <img src="/evolutec-sobre-1.webp" alt="Equipe Evolutec" />
            </div>
            <div className="img-wrapper sub-img">
              <img src="/evolutec-sobre-2.webp" alt="Alunos estudando" />
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
              <button 
                className={`tab-btn ${activeTab === 'missao' ? 'active' : ''}`}
                onClick={() => setActiveTab('missao')}
              >
                Nossa Missão
              </button>
              <button 
                className={`tab-btn ${activeTab === 'visao' ? 'active' : ''}`}
                onClick={() => setActiveTab('visao')}
              >
                Nossa Visão
              </button>
              <button 
                className={`tab-btn ${activeTab === 'valores' ? 'active' : ''}`}
                onClick={() => setActiveTab('valores')}
              >
                Valores
              </button>
            </div>
            
            {renderTabContent()}
          </div>

          <div className="mission-image">
            <img src="/evolutec-sobre.webp" alt="Nossa Missão" />
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
          
          <div className="units-content-wrapper">
            <div className="units-map-image">
              <img src="/mapa-pará-escola.png" alt="Mapa de atuação Evolutec no Pará" />
            </div>

            <div className="units-list-container">
              <ul className="units-list">
                <li>
                  <div className="unit-bullet"><MapPin size={18} /></div>
                  <div className="unit-info">
                    <span className="unit-name">Castanhal</span>
                    <span className="unit-address">Tv. Cônego Luíz Leitão, 2479 - Centro, Castanhal - PA, 68743-020</span>
                  </div>
                </li>
                <li>
                  <div className="unit-bullet"><MapPin size={18} /></div>
                  <div className="unit-info">
                    <span className="unit-name">Marapanim</span>
                    <span className="unit-address">R. Edmundo Botelho, 544 - Centro, Marapanim - PA, 68760-000</span>
                  </div>
                </li>
                <li>
                  <div className="unit-bullet"><MapPin size={18} /></div>
                  <div className="unit-info">
                    <span className="unit-name">Curuçá</span>
                    <span className="unit-address">Tv. Sete de Setembro, 151 - Centro, Curuçá - PA, 68750-000</span>
                  </div>
                </li>
                <li>
                  <div className="unit-bullet"><MapPin size={18} /></div>
                  <div className="unit-info">
                    <span className="unit-name">Maracanã</span>
                    <span className="unit-address">Rua Cantidio Guimarães, Tv. Ernesto Gomes, 53 - Qd 44 - Centro, Maracanã - PA, 68710-000</span>
                  </div>
                </li>
                <li>
                  <div className="unit-bullet"><MapPin size={18} /></div>
                  <div className="unit-info">
                    <span className="unit-name">Irituia</span>
                    <span className="unit-address">Tv. Ceará - Centro, Irituia - PA, 68655-000</span>
                  </div>
                </li>
                <li>
                  <div className="unit-bullet"><MapPin size={18} /></div>
                  <div className="unit-info">
                    <span className="unit-name">São Domingos do Capim</span>
                    <span className="unit-address">Av. Dr. Lauro Sodré, 70 - Centro, São Domingos do Capim - PA, 68635-000</span>
                  </div>
                </li>
                <li>
                  <div className="unit-bullet"><MapPin size={18} /></div>
                  <div className="unit-info">
                    <span className="unit-name">São Miguel do Guamá</span>
                    <span className="unit-address">Tv. Américo Lopes, 297 - São Manoel, São Miguel do Guamá - PA, 68660-000</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
