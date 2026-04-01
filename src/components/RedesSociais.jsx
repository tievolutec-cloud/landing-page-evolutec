import './RedesSociais.css'

function RedesSociais() {
  const posts = [
    {
      id: 1,
      imagem: '/instagram1.webp',
      data: '14 de fevereiro de 2026'
    },
    {
      id: 2,
      imagem: '/instagram2.webp',
      data: '14 de fevereiro de 2026'
    },
    {
      id: 3,
      imagem: '/instagram3.webp',
      data: '14 de fevereiro de 2026'
    }
  ];

  return (
    <section className="redes-sociais" id="redes">
      <div className="redes-container">
        <div className="redes-left">
          <div className="social-icons">
            <a href="https://www.youtube.com/@evolutecoficial" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/evolutecoficial/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.tiktok.com/@evoluteceducacao" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/evoluteceducacao/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <h2 className="redes-titulo">
            Fique ligado<br />
            nas nossas<br />
            redes
          </h2>
        </div>

        <div className="redes-right">
          <div className="scroll-container">
            <div className="scroll-content">
              {/* Primeira cópia das postagens */}
              {posts.map((post) => (
                <div key={`post-${post.id}`} className="instagram-post">
                  <div className="post-image-container">
                    <img src={post.imagem} alt={`Post ${post.id}`} />
                  </div>
                  <div className="post-actions">
                    <div className="action-icons">
                      <i className="far fa-heart"></i>
                      <i className="far fa-comment"></i>
                      <i className="far fa-paper-plane"></i>
                    </div>
                    <p className="post-date">{post.data}</p>
                  </div>
                </div>
              ))}
              {/* Segunda cópia para loop infinito */}
              {posts.map((post) => (
                <div key={`post-duplicate-${post.id}`} className="instagram-post">
                  <div className="post-image-container">
                    <img src={post.imagem} alt={`Post ${post.id}`} />
                  </div>
                  <div className="post-actions">
                    <div className="action-icons">
                      <i className="far fa-heart"></i>
                      <i className="far fa-comment"></i>
                      <i className="far fa-paper-plane"></i>
                    </div>
                    <p className="post-date">{post.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RedesSociais
