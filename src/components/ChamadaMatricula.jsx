import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ChamadaMatricula.css';

const images = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

function ChamadaMatricula() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="chamada-matricula">
      <div className="chamada-container">
        <div className="chamada-content">
          <h2 className="chamada-titulo">
            Dê o primeiro passo rumo ao seu <span>futuro profissional!</span>
          </h2>
          <p className="chamada-descricao">
            Não deixe para amanhã a carreira que você pode começar a construir hoje. 
            Nossos cursos são focados na prática e nas exigências do mercado de trabalho.
          </p>
          <div className="chamada-botoes">
            <a href="#matricule" className="btn-matricula">
              Quero me Matricular
            </a>
            <a href="#contato" className="btn-falar-consultor">
              Fale Conosco
            </a>
          </div>
        </div>
        <div className="chamada-imagem">
          <div className="imagem-placeholder carousel-container">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Alunos estudando ${index + 1}`} 
                className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
               loading="lazy" decoding="async"/>
            ))}
            <button className="carousel-btn prev" onClick={prevImage} aria-label="Imagem anterior">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-btn next" onClick={nextImage} aria-label="Próxima imagem">
              <ChevronRight size={24} />
            </button>
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChamadaMatricula;
