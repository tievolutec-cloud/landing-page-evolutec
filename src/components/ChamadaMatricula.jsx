import './ChamadaMatricula.css';

function ChamadaMatricula() {
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
          {/* Você pode substituir por uma imagem real de alunos ou da escola */}
          <div className="imagem-placeholder">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Alunos estudando" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChamadaMatricula;
