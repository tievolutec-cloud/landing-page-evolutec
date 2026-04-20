import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import './Blog.css'

function Blog() {
  const posts = blogData;

  const destaque = posts.find(post => post.destaque);
  const noticias = posts.filter(post => !post.destaque);

  return (
    <section className="blog" id="conteudos">
      {/* Header */}
      <div className="blog-header">
        <div className="blog-header-left">
          <h2 className="blog-titulo">Blog Evolutec</h2>
          <p className="blog-subtitulo">Confira as nossas últimas notícias</p>
        </div>
        <Link to="/blog" className="blog-ver-mais">
          Ver mais notícias <span>&rarr;</span>
        </Link>
      </div>

      <div className="blog-grid">
        {/* Card destaque (esquerda) */}
        {destaque && (
          <Link to={`/noticia/${destaque.id}`} className="blog-destaque">
            <img src={destaque.imagem} alt={destaque.titulo} className="blog-destaque-img"  loading="lazy" decoding="async"/>
            <div className="blog-destaque-overlay" />
            <div className="blog-destaque-content">
              <div className="blog-destaque-tags">
                {destaque.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
              <h3 className="blog-destaque-titulo">{destaque.titulo}</h3>
              <p className="blog-destaque-subtitulo">{destaque.subtitulo}</p>
            </div>
          </Link>
        )}

        {/* Cards laterais (direita) */}
        <div className="blog-lateral">
          {noticias.map((noticia) => (
            <Link key={noticia.id} to={`/noticia/${noticia.id}`} className="blog-card">
              <div className="blog-card-img-wrapper">
                <img src={noticia.imagem} alt={noticia.titulo} className="blog-card-img"  loading="lazy" decoding="async"/>
              </div>
              <div className="blog-card-info">
                <span className="blog-card-data">{noticia.data}</span>
                <h4 className="blog-card-titulo">{noticia.titulo}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
