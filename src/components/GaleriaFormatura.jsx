import './GaleriaFormatura.css'

export default function GaleriaFormatura() {
  return (
    <section className="galeria-section">
      <div className="galeria-grid">

        {/* Célula 1 — texto "Nossa Missão" */}
        <div className="galeria-cell galeria-cell--text galeria-cell--dark">
          <span className="galeria-tag">Nossa Missão</span>
          <h3 className="galeria-cell-title">Formando profissionais que transformam o mercado</h3>
          <p className="galeria-cell-desc">
            Há mais de 15 anos preparando alunos com cursos técnicos de qualidade,
            acompanhamento dedicado e certificação reconhecida.
          </p>
          <a href="#matricule" className="galeria-btn">Saiba Mais</a>
        </div>

        {/* Célula 2 — imagem grande */}
        <div className="galeria-cell galeria-cell--img galeria-cell--tall">
          <img src="/formatura.jpeg" alt="Formatura Evolutec" />
          <div className="galeria-img-overlay">
            <span>Turma 2024</span>
          </div>
        </div>

        {/* Célula 3 — imagem */}
        <div className="galeria-cell galeria-cell--img">
          <img src="/formatura2.jpeg" alt="Formatura" />
          <div className="galeria-img-overlay">
            <span>Aprovados</span>
          </div>
        </div>

        {/* Célula 4 — imagem */}
        <div className="galeria-cell galeria-cell--img">
          <img src="/formatura3.jpeg" alt="Formatura" />
          <div className="galeria-img-overlay">
            <span>Conquistas</span>
          </div>
        </div>

        {/* Célula 5 — texto "Matrículas" */}
        <div className="galeria-cell galeria-cell--text galeria-cell--red">
          <span className="galeria-tag">Matrículas Abertas</span>
          <h3 className="galeria-cell-title">Garanta sua vaga no próximo curso</h3>
          <p className="galeria-cell-desc">
            Inscrições para novas turmas abertas. Não perca a oportunidade de
            mudar sua trajetória profissional.
          </p>
          <a href="#matricule" className="galeria-btn galeria-btn--white">Inscreva-se Hoje</a>
        </div>

        {/* Célula 6 — imagem grande horizontal */}
        <div className="galeria-cell galeria-cell--img galeria-cell--wide">
          <img src="/formatura4.jpeg" alt="Formatura" />
          <div className="galeria-img-overlay">
            <span>Momentos Especiais</span>
          </div>
        </div>

        {/* Célula 7 — imagem */}
        <div className="galeria-cell galeria-cell--img">
          <img src="/formatura5.jpeg" alt="Formatura" />
          <div className="galeria-img-overlay">
            <span>Celebração</span>
          </div>
        </div>

        {/* Célula 8 — imagem */}
        <div className="galeria-cell galeria-cell--img">
          <img src="/formatura6.jpeg" alt="Formatura" />
          <div className="galeria-img-overlay">
            <span>Sucesso</span>
          </div>
        </div>

      </div>
    </section>
  )
}
