import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { blogData } from '../data/blogData';
import './Noticia.css';

function Noticia() {
  const { id } = useParams();
  const noticia = blogData.find(post => post.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!noticia) {
    return <Navigate to="/" replace />;
  }

  // Pegar outras notícias para a seção "Veja também"
  const outrasNoticias = blogData.filter(post => post.id !== id).slice(0, 3);

  return (
    <div className="noticia-page">
      <div className="noticia-layout">
        <div className="noticia-container">
          <div className="noticia-header">
            <div className="noticia-tags">
              {noticia.tags.map(tag => (
                <span key={tag} className="noticia-tag">{tag}</span>
              ))}
            </div>
            <h1 className="noticia-titulo">{noticia.titulo}</h1>
            <p className="noticia-subtitulo">{noticia.subtitulo}</p>
            <div className="noticia-meta">
              <span className="noticia-data">Publicado em {noticia.data}</span>
            </div>
          </div>

          <div className="noticia-imagem-container">
            <img src={noticia.imagem} alt={noticia.titulo} className="noticia-imagem" />
          </div>

          <div 
            className="noticia-conteudo"
            dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
          />

          <div className="noticia-footer">
            <Link to="/" className="btn-voltar">
              &larr; Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>

      {outrasNoticias.length > 0 && (
        <section className="outras-noticias-bottom">
          <div className="outras-noticias-container">
            <h2>Veja também</h2>
            <div className="outras-noticias-grid">
              {outrasNoticias.map(item => (
                <Link key={item.id} to={`/noticia/${item.id}`} className="outra-noticia-card">
                  <div className="outra-noticia-img-wrapper">
                    <img src={item.imagem} alt={item.titulo} />
                  </div>
                  <div className="outra-noticia-info">
                    <span className="outra-noticia-data">{item.data}</span>
                    <h3>{item.titulo}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Noticia;
