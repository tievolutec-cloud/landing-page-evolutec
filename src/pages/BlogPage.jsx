import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { blogData } from '../data/blogData';
import './BlogPage.css';

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-page-headers">
        <h1>Blog Evolutec</h1>
        <p>Fique por dentro das nossas últimas notícias, dicas e eventos.</p>
      </div>

      <div className="blog-page-container">
        <div className="blog-page-grid">
          {blogData.map((noticia) => (
            <Link key={noticia.id} to={`/noticia/${noticia.id}`} className="blog-page-card">
              <div className="blog-page-img-wrapper">
                <img src={noticia.imagem} alt={noticia.titulo} />
                <div className="blog-page-tags">
                  {noticia.tags.map(tag => (
                    <span key={tag} className="blog-page-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="blog-page-info">
                <span className="blog-page-data">{noticia.data}</span>
                <h3 className="blog-page-titulo">{noticia.titulo}</h3>
                <p className="blog-page-subtitulo">{noticia.subtitulo}</p>
                <span className="blog-page-ler-mais">Ler mais &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
