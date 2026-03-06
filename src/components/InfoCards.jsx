import './InfoCards.css'

const cards = [
  {
    title: 'Carreiras',
    text: 'Na Evolutec, preparamos nossos alunos para carreiras de sucesso, com cursos focados no desenvolvimento de habilidades práticas e técnicas que atendem às necessidades do mercado de trabalho. Aqui, cada estudante é guiado para construir um futuro profissional sólido e repleto de oportunidades.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&fit=crop',
  },
  {
    title: 'Vida na Escola',
    text: 'A vida na Evolutec é dinâmica e inspiradora. Oferecemos um ambiente acolhedor, interativo e cheio de recursos tecnológicos, onde os alunos podem aprender, crescer e se conectar com colegas e professores. Cada dia é uma nova oportunidade para se desenvolver.',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=360&fit=crop',
  },
  {
    title: 'Eventos',
    text: 'A Evolutec promove diversos eventos durante o ano, como Feiras de profissões, palestras, workshops e convenções, que oferecem aos alunos a chance de se atualizar com as últimas tendências do mercado e se envolver em atividades enriquecedoras que ampliam sua rede de contatos.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=360&fit=crop',
  },
  {
    title: 'Direito estudantil',
    text: 'Nosso compromisso com o direito estudantil é garantir que todos os alunos tenham acesso a um ambiente justo e respeitoso. Oferecemos apoio jurídico e orientações sobre direitos, garantias e deveres dentro da comunidade escolar.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=360&fit=crop',
  },
]

export default function InfoCards() {
  return (
    <section className="ic-section">
      <p className="ic-label">Evolutec</p>
      <h2 className="ic-heading">Tudo que você precisa em um só lugar</h2>
      <div className="ic-grid">
        {cards.map(card => (
          <div className="ic-card" key={card.title}>
            <h3 className="ic-title">{card.title}</h3>
            <p className="ic-body">{card.text}</p>
            <img src={card.image} alt={card.title} className="ic-img" />
          </div>
        ))}
      </div>
    </section>
  )
}

