import './CursosWireframe.css'

function WireframeLine({ className = '' }) {
  return <div className={`wire-line ${className}`.trim()} aria-hidden="true" />
}

function WireframeCard() {
  return (
    <article className="wire-card" aria-hidden="true">
      <div className="wire-card-image" />
      <div className="wire-card-body">
        <WireframeLine className="wire-chip" />
        <WireframeLine className="wire-title" />
        <WireframeLine className="wire-title wire-title-short" />
        <div className="wire-meta-row">
          <WireframeLine className="wire-meta" />
          <WireframeLine className="wire-meta" />
        </div>
        <div className="wire-footer-row">
          <WireframeLine className="wire-tag" />
          <WireframeLine className="wire-button" />
        </div>
      </div>
    </article>
  )
}

export function CursosHomeWireframe() {
  return (
    <section className="cursos-wireframe cursos-wireframe-home" aria-label="Carregando cursos">
      <div className="cursos-wireframe-container">
        <div className="wire-header">
          <WireframeLine className="wire-heading" />
          <WireframeLine className="wire-subheading" />
        </div>

        <div className="wire-grid wire-grid-home">
          {Array.from({ length: 6 }).map((_, index) => (
            <WireframeCard key={`home-${index}`} />
          ))}
        </div>

        <div className="wire-cta-row">
          <WireframeLine className="wire-cta" />
        </div>
      </div>
    </section>
  )
}

export function CursosPageWireframe() {
  return (
    <div className="cursos-wireframe cursos-wireframe-page" aria-label="Carregando pagina de cursos">
      <section className="wire-page-hero" aria-hidden="true">
        <div className="wire-page-hero-inner">
          <WireframeLine className="wire-hero-title" />
          <WireframeLine className="wire-hero-tag" />
          <WireframeLine className="wire-hero-subtext" />
        </div>
      </section>

      <div className="wire-page-content">
        <aside className="wire-sidebar" aria-hidden="true">
          <WireframeLine className="wire-sidebar-title" />
          <WireframeLine className="wire-sidebar-button" />
          <WireframeLine className="wire-input" />
          <WireframeLine className="wire-filter" />
          <WireframeLine className="wire-filter" />
          <WireframeLine className="wire-filter" />
          <WireframeLine className="wire-filter" />
        </aside>

        <main className="wire-main" aria-hidden="true">
          <div className="wire-toolbar">
            <WireframeLine className="wire-toolbar-left" />
            <WireframeLine className="wire-toolbar-right" />
          </div>
          <div className="wire-grid wire-grid-page">
            {Array.from({ length: 4 }).map((_, index) => (
              <WireframeCard key={`page-${index}`} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export function HomeSectionWireframe({
  label = 'Carregando secao',
  blocks = 1,
  stacked = false,
  height = 180,
}) {
  return (
    <section className="home-section-wireframe" aria-label={label}>
      <div className="home-section-wireframe-inner" aria-hidden="true">
        <div className="home-wire-header">
          <WireframeLine className="home-wire-title" />
          <WireframeLine className="home-wire-subtitle" />
        </div>

        <div className={`home-wire-grid ${stacked ? 'is-stacked' : ''}`}>
          {Array.from({ length: blocks }).map((_, index) => (
            <div
              key={`home-section-${index}`}
              className="home-wire-block"
              style={{ minHeight: `${height}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
