import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { cursosData, categoriasCursos } from '../data/coursesData';
import './CursosPage.css';

const ITEMS_PER_PAGE = 4;

// Ícones
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/>
    <line x1="3" y1="12" x2="3.01" y2="12"/>
    <line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

function CursosPage() {
  const [searchParams] = useSearchParams();
  const cursos = cursosData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get('categoria') || 'Todos');
  const [selectedMode, setSelectedMode] = useState('Todos');
  const [selectedTag, setSelectedTag] = useState('Todos');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'
  const [sortBy, setSortBy] = useState('title'); // 'title', 'duration', 'category'
  const [currentPage, setCurrentPage] = useState(1);

  // Sincroniza o filtro de categoria quando o query param muda (ex: navegação pelo dropdown)
  useEffect(() => {
    const categoria = searchParams.get('categoria');
    setSelectedCategory(categoria || 'Todos');
  }, [searchParams]);

  // Extrair categorias únicas
  const categories = categoriasCursos;

  // Filtrar e ordenar cursos
  const filteredCursos = useMemo(() => {
    let filtered = cursos.filter(curso => {
      const matchSearch = curso.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         curso.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory === 'Todos' || curso.category === selectedCategory;
      const matchMode = selectedMode === 'Todos' || curso.mode === selectedMode;
      const matchTag = selectedTag === 'Todos' || curso.tag === selectedTag;
      
      return matchSearch && matchCategory && matchMode && matchTag;
    });

    // Ordenar
    filtered.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      } else if (sortBy === 'duration') {
        return a.duration.localeCompare(b.duration);
      }
      return 0;
    });

    return filtered;
  }, [cursos, searchTerm, selectedCategory, selectedMode, selectedTag, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todos');
    setSelectedMode('Todos');
    setSelectedTag('Todos');
    setSortBy('title');
    setCurrentPage(1);
  };

  // Reset para página 1 ao mudar filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedMode, selectedTag, sortBy]);

  const totalPages = Math.ceil(filteredCursos.length / ITEMS_PER_PAGE);
  const paginatedCursos = filteredCursos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages];
    if (currentPage >= totalPages - 3) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="cursos-page">
      {/* Hero Section */}
      <section className="cursos-page-hero">
        <div className="cursos-page-hero-content">
          <h1>Nossos Cursos</h1>
          <p className="cursos-page-tagline">Evolutec • Cursos</p>
          <p className="cursos-page-subtext">Escolha o curso ideal e dê o próximo passo na sua carreira.</p>
        </div>
      </section>

      <div className="cursos-page-container">
        {/* Sidebar de Filtros */}
        <aside className="cursos-page-sidebar">
          <div className="sidebar-header">
            <h3>
              <FilterIcon />
              Filtros
            </h3>
            <button onClick={clearFilters} className="btn-clear-filters">
              Limpar
            </button>
          </div>

          {/* Busca */}
          <div className="filter-group">
            <label>Buscar Curso</label>
            <div className="search-input-wrapper">
              <SearchIcon />
              <input
                type="text"
                placeholder="Digite o nome do curso..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Categoria */}
          <div className="filter-group">
            <label>Categoria</label>
            <div className="filter-options">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Conteúdo Principal */}
        <main className="cursos-page-main">
          {/* Barra de Controles */}
          <div className="cursos-controls">
            <div className="cursos-count">
              <strong>{filteredCursos.length}</strong> {filteredCursos.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
              {totalPages > 1 && (
                <span className="cursos-count-page"> &mdash; página {currentPage} de {totalPages}</span>
              )}
            </div>

            <div className="cursos-actions">
              {/* Ordenação */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="title">Ordenar por: Nome</option>
                <option value="category">Ordenar por: Categoria</option>
                <option value="duration">Ordenar por: Duração</option>
              </select>

              {/* View Mode */}
              <div className="view-mode-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Visualização em grade"
                >
                  <GridIcon />
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="Visualização em lista"
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Cursos */}
          {filteredCursos.length === 0 ? (
            <div className="no-results">
              <p>Nenhum curso encontrado com os filtros selecionados.</p>
              <button onClick={clearFilters} className="btn-clear-filters-main">
                Limpar Filtros
              </button>
            </div>
          ) : (
            <>
              {/* Paginação superior */}
              {totalPages > 1 && (
                <nav className="cursos-pagination cursos-pagination--top" aria-label="Paginação de cursos (topo)">
                  <button
                    className="pagination-btn pagination-prev"
                    onClick={() => setCurrentPage(p => p - 1)}
                    disabled={currentPage === 1}
                  >
                    &lsaquo; Anterior
                  </button>

                  <div className="pagination-pages">
                    {getPageNumbers().map((page, idx) =>
                      page === '...' ? (
                        <span key={`ellipsis-top-${idx}`} className="pagination-ellipsis">...</span>
                      ) : (
                        <button
                          key={page}
                          className={`pagination-page${currentPage === page ? ' active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    className="pagination-btn pagination-next"
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Próxima &rsaquo;
                  </button>
                </nav>
              )}

              <div className={`cursos-list ${viewMode}`}>
                {paginatedCursos.map(curso => (
                <Link
                  key={curso.id}
                  to={`/curso/${curso.slug}`}
                  className={`curso-card ${viewMode}`}
                >
                  <div className="curso-card-image">
                    <img src={curso.image} alt={curso.title}  loading="lazy" decoding="async"/>
                  </div>

                  <div className="curso-card-content">
                    <h3 className="curso-card-title">{curso.title}</h3>
                    <p className="curso-card-description">{curso.description}</p>

                    <div className="curso-card-meta">
                      <div className="meta-item">
                        <ClockIcon />
                        <span className="meta-label">Duracao</span>
                        <span className="meta-value">{curso.duration}</span>
                      </div>
                      <div className="meta-item">
                        <BookIcon />
                        <span className="meta-label">Carga</span>
                        <span className="meta-value">{curso.hours}</span>
                      </div>
                    </div>

                    <div className="curso-card-footer">
                      <span className="view-details">
                        Ver detalhes <ArrowRightIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

              {/* Paginação */}
              {totalPages > 1 && (
                <nav className="cursos-pagination" aria-label="Paginação de cursos">
                  <button
                    className="pagination-btn pagination-prev"
                    onClick={() => { setCurrentPage(p => p - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    disabled={currentPage === 1}
                  >
                    &lsaquo; Anterior
                  </button>

                  <div className="pagination-pages">
                    {getPageNumbers().map((page, idx) =>
                      page === '...' ? (
                        <span key={`ellipsis-${idx}`} className="pagination-ellipsis">...</span>
                      ) : (
                        <button
                          key={page}
                          className={`pagination-page${currentPage === page ? ' active' : ''}`}
                          onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    className="pagination-btn pagination-next"
                    onClick={() => { setCurrentPage(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    disabled={currentPage === totalPages}
                  >
                    Próxima &rsaquo;
                  </button>
                </nav>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default CursosPage;
