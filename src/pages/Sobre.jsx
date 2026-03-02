import React, { useEffect } from 'react';
import './Sobre.css';
import { MapPin, Users, Award, Clock } from 'lucide-react';

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const polos = [
    { nome: "Castanhal", endereco: "Centro" },
    { nome: "Belém", endereco: "São Brás" },
    { nome: "Ananindeua", endereco: "Cidade Nova" },
    { nome: "Marituba", endereco: "Centro" },
    // Adicione mais polos conforme necessário
  ];

  return (
    <div className="sobre-page">
      {/* Hero Section */}
      <section className="sobre-hero">
        <div className="sobre-hero-content">
          <h1>Quem Somos</h1>
          <p>Líder em ensino profissionalizante no Pará</p>
        </div>
      </section>

      {/* História Section */}
      <section className="sobre-historia">
        <div className="historia-text">
          <h2>Transformando Vidas Há Mais de 15 Anos</h2>
          <p>
            A Evolutec nasceu com um propósito claro: democratizar o acesso ao ensino profissionalizante de qualidade. 
            Começamos nossa jornada em 2010, em uma pequena sala em Castanhal, com o sonho de preparar jovens e 
            adultos para um mercado de trabalho cada vez mais exigente.
          </p>
          <p>
            Hoje, somos referência em educação técnica e qualificação profissional em todo o estado do Pará. 
            Nossa metodologia une teoria e prática, focando no desenvolvimento humano e técnico de nossos alunos.
          </p>
          <div className="historia-stats">
            <div className="stat-item">
              <Clock className="stat-icon" size={24} />
              <span>15+ Anos de História</span>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" size={24} />
              <span>40.000+ Alunos Formados</span>
            </div>
          </div>
        </div>
        <div className="historia-img">
          <img src="/formatura.jpeg" alt="História da Evolutec" />
        </div>
      </section>

      {/* Polos Section */}
      <section className="sobre-polos">
        <div className="container">
          <h2 className="section-title">Nossa Presença</h2>
          <p className="section-desc">Estamos perto de você para facilitar seu aprendizado.</p>
          
          <div className="stats-highlight">
            <span className="highlight-number">{polos.length}</span>
            <span className="highlight-label">Unidades no Pará</span>
          </div>

          <div className="polos-grid">
            {polos.map((polo, index) => (
              <div key={index} className="polo-card">
                <MapPin className="polo-icon" size={32} color="#dc2626" style={{marginBottom: '1rem'}}/>
                <h3>{polo.nome}</h3>
                <p>{polo.endereco}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="sobre-valores">
        <h2>Nossos Pilares</h2>
        <div className="valores-grid">
          <div className="valor-item">
            <Award size={48} color="#dc2626" />
            <h3>Excelência</h3>
            <p>Buscamos a qualidade máxima em nossa infraestrutura e corpo docente.</p>
          </div>
          <div className="valor-item">
            <Users size={48} color="#dc2626" />
            <h3>Inclusão</h3>
            <p>Acreditamos que a educação deve ser acessível a todos, sem barreiras.</p>
          </div>
          <div className="valor-item">
            <Clock size={48} color="#dc2626" />
            <h3>Inovação</h3>
            <p>Estamos sempre atualizando nossos cursos para as demandas do futuro.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
