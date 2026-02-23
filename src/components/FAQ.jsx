import { useState } from 'react'
import './FAQ.css'

const faqData = [
  {
    pergunta: 'Quais cursos a Evolutec oferece?',
    resposta: 'Oferecemos uma ampla variedade de cursos técnicos e profissionalizantes, incluindo Técnico em Enfermagem, Conectividade e Tecnologia, Profissional em Vendas, entre outros. Nossos cursos são desenvolvidos para preparar você para o mercado de trabalho.'
  },
  {
    pergunta: 'Como funciona o processo de matrícula?',
    resposta: 'O processo de matrícula é simples e rápido. Você pode se inscrever através do nosso site ou visitando uma de nossas unidades. Nossa equipe está pronta para orientá-lo em todas as etapas, desde a escolha do curso até a documentação necessária.'
  },
  {
    pergunta: 'Os cursos têm certificação reconhecida?',
    resposta: 'Sim! Todos os nossos cursos possuem certificação reconhecida pelo MEC e órgãos competentes. Ao concluir seu curso na Evolutec, você receberá um certificado válido em todo território nacional.'
  },
  {
    pergunta: 'Qual é a duração dos cursos?',
    resposta: 'A duração varia de acordo com o curso escolhido. Cursos técnicos geralmente têm duração de 18 a 24 meses, enquanto cursos profissionalizantes podem variar de 6 a 12 meses. Consulte nossa equipe para informações específicas sobre o curso de seu interesse.'
  },
  {
    pergunta: 'A Evolutec oferece aulas práticas?',
    resposta: 'Com certeza! Acreditamos que a prática é fundamental para o aprendizado. Todos os nossos cursos incluem aulas práticas em laboratórios equipados e, quando aplicável, estágios supervisionados em empresas parceiras.'
  },
  {
    pergunta: 'Existe algum tipo de bolsa ou financiamento?',
    resposta: 'Sim, trabalhamos com diversas opções de pagamento e parcerias para facilitar seu acesso à educação de qualidade. Entre em contato conosco para conhecer as opções disponíveis e encontrar a melhor solução para você.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="faq-cap-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h2 className="faq-title">Perguntas Frequentes</h2>
          <p className="faq-subtitle">Tire suas dúvidas sobre nossos cursos e serviços</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{item.pergunta}</span>
                <span className="faq-icon">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    width="24" 
                    height="24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  {item.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
