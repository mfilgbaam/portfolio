import { useEffect, useState } from 'react'
import './App.css'
import './i18n'
import { useTranslation } from 'react-i18next'
import PatternWaves from './PatternWaves'
import pfimagen from './assets/profile.webp'

type Category = 'Todos' | 'Videojuegos' | 'Programación'
type Language = 'EN' | 'ES'
const tags = ['Unreal Engine', 'C++', 'Godot', 'React', 'TypeScript', 'UI/UX', 'Node.js'] as const
type Tag = typeof tags[number]
type Project = { id: string; title: string; category: Category; description: string; tags: Tag[]; year: string; art: string; detail: string; images?: { src: string; alt: string }[]; video?: string; featured?: boolean }
const projects: Project[] = [
  { id: 'orbital', title: 'Orbital', category: 'Videojuegos', description: 'Una aventura espacial donde cada órbita cuenta.', tags: [], year: '2025', art: 'space', detail: 'Un concepto de exploración espacial centrado en el movimiento y el descubrimiento. El jugador navega entre pequeños mundos, encuentra nuevas rutas y aprende a utilizar la gravedad a su favor.', featured: true },
  { id: 'flow', title: 'Flow', category: 'Programación', description: 'Menos ruido. Más foco. Tu trabajo, en un solo lugar.', tags: ['React', 'TypeScript', 'UI/UX'], year: '2025', art: 'dashboard', detail: 'Un concepto de aplicación para organizar proyectos y tareas con una interfaz clara. La propuesta reúne tableros, actividad y prioridades para hacer más fácil el trabajo diario.' },
  { id: 'ember', title: 'Ember', category: 'Todos', description: 'Un pequeño héroe en un mundo que se apaga.', tags: [], year: '2024', art: 'pixel', detail: 'Un concepto de plataformas en pixel art sobre una pequeña criatura que lleva luz a un mundo olvidado. La exploración, los saltos y una atmósfera cálida guían la experiencia.' },
  { id: 'nexus', title: 'Nexus', category: 'Programación', description: 'Una API pensada para conectar ideas y herramientas.', tags: [], year: '2024', art: 'code', detail: 'Un concepto de API modular para conectar aplicaciones. Su diseño prioriza contratos claros, respuestas consistentes y una documentación fácil de seguir.', featured: true },
]
function Arrow() { return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg> }

function ConditionalInterrogation({ l }: { l: Language }){return <span>{(l === 'ES' ? '¿' : '')}</span>}

function Art({ kind, title }: { kind: string; title: string }) {
  return <div className={`art art-${kind}`} role="img" aria-label={`Ilustración de ${title}`}>
    {kind === 'space' && <><div className="stars" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet" /><span className="art-word">ORBITAL<span>BEYOND THE KNOWN</span></span><span className="coordinate">SECTOR 07 / 042.8</span></>}
    {kind === 'dashboard' && <div className="mock-app"><div className="mock-sidebar"><b>◈ flow</b><span>▦ Overview</span><span>▤ Projects</span><span>◷ Activity</span><span>⚙ Settings</span></div><div className="mock-content"><small>WORKSPACE</small><h3>Good morning, Alex <span>✦</span></h3><div className="mock-stats"><div>Projects<b>12 <i>↗</i></b></div><div>In progress<b>04</b></div><div>Completed<b>28</b></div></div><h4>Your projects <span>+ New project</span></h4><div className="mock-row"><i />Website redesign<span>In progress</span></div><div className="mock-row"><i />Mobile application<span>Planning</span></div><div className="mock-row"><i />Design system<span>Review</span></div></div></div>}
    {kind === 'pixel' && <><div className="pixel-moon" /><div className="mountains" /><div className="pixel-ground" /><div className="pixel-person">✦</div><span className="pixel-title">EMBER<small>A LITTLE LIGHT IN THE DARK</small></span></>}
    {kind === 'code' && <div className="code-window"><div className="window-dots">● ● ● <span>nexus / routes.ts</span></div><pre><span>// Ideas, connected.</span>{'\n'}<em>import</em> {'{ Router }'} <em>from</em> <i>'nexus'</i>{'\n\n'}<em>const</em> api = <b>Router</b>(){'\n\n'}api.<b>get</b>(<i>'/projects'</i>, <em>async</em> () =&gt; {'{\n'}{'  '}<em>return</em> {'{'}{'\n'}{'    '}status: <i>'connected'</i>,{'\n'}{'    '}possibilities: <b>Infinity</b>{'\n  }\n})'}</pre><div className="code-status">● All systems connected <span>TypeScript</span></div></div>}
  </div>
}

function App() {

    const handlechangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  const [route, setRoute] = useState(window.location.hash)
  const [category, setCategory] = useState<Category>('Todos')
  const [language, setLanguage] = useState<Language>(navigator.language === "en" ? 'EN' : navigator.language === "es" ? 'ES' : 'EN')
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [lightbox, setLightbox] = useState(false)
  const { t, i18n} = useTranslation()




  useEffect(() => {
    const onHash = () => { setRoute(window.location.hash); setLightbox(false); if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  useEffect(() => { // Ordenar proyectos por destacados y año
    projects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || parseInt(b.year) - parseInt(a.year))
    }, [projects])
  const project = projects.find(p => route === `#/proyecto/${p.id}`)
  const unknown = route.startsWith('#/proyecto/') && !project
  const filtered = projects.filter(p => (category === 'Todos' || p.category === category || p.category === 'Todos') && selectedTags.every(t => p.tags.includes(t)))
  const home = () => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const goSection = (id: string) => { if (project || unknown) { window.location.hash = ''; setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0) } else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  
  return <>
    <header className="header">
      <button className="brand" onClick={home} aria-label="Ir a inicio">m<span>.</span><span className="brand-name">portfolio</span></button>
      <nav aria-label="Navegación principal" className="navbar">
        <p className="lang-ico">文</p>
        <div className="segmented-lang" role="group" aria-label="Language">
            <div className="segment-indicator-lang" style={{ transform: `translateX(${(['EN', 'ES'] as Language[]).indexOf(language) * 100}%)` }} />
            {(['EN', 'ES'] as Language[]).map(l => <button key={l} aria-pressed={language === l} onClick={() => {setLanguage(l);handlechangeLanguage(l === 'EN' ? "en" : l === 'ES' ? "es": "en")}}> {l}</button>)}
          </div>
        <button onClick={() => goSection('proyectos')}>{t("proyectos")}</button>
        <button onClick={() => goSection('sobre-mi')}>{t("about")}</button>
        <button className="contact-nav" onClick={() => goSection('contacto')}>{t("contact")} <span><Arrow /></span></button>
        </nav>
    </header>
    {unknown ? <main className="detail">                                                              {/* Pagina de proyecto no encontrado */}
      <p className="eyebrow">{t("notfound")}</p>
      <h1>{t("notfound-desc")}</h1>
      <button className="primary" onClick={home}>{t("notfound-back")}</button>
    </main> : project ? <main className="detail">                                                     {/* Pagina de proyecto existente */}
      <button className="back" onClick={() => goSection('proyectos')}>← Volver a proyectos</button>
      <div className="detail-heading">
        <div>
          <p className="eyebrow">{project.category} / {project.year}</p>
          <h1>{project.title}<span>.</span></h1>
          <p>{project.description}</p>
        </div>
        <div className="tag-list">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
      <Art kind={project.art} title={project.title} />
      <div className="detail-copy">
        <h2>Detrás de la idea</h2>
        <div>
          <p>{project.detail}</p>
          <p className="sample-note">Proyecto de ejemplo · Las ilustraciones son conceptuales. Sustituye este contenido por tu trabajo y tus recursos.</p>
        </div>
      </div>
      <div className="gallery-heading">
        <h2>Una mirada más cerca<span>.</span></h2>
        <span>GALERÍA / 01</span>
      </div>
      {project.images?.map(image => 
        <figure className="real-image" key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          <figcaption>{image.alt}</figcaption>
        </figure>)}
      <button className="gallery-image" onClick={() => setLightbox(true)} aria-label={`Ampliar imagen de ${project.title}`}>
        <Art kind={project.art} title={project.title} />
        <span>Ampliar imagen <Arrow /></span>
      </button>
      <div className="video-block">
        <div>
          <p className="eyebrow">EN MOVIMIENTO</p>
          <h2>El proyecto en acción</h2>
          <p>Espacio preparado para un vídeo de gameplay o una demostración.</p>
        </div>
        {project.video ? 
          <video className="project-video" src={project.video} controls preload="metadata" aria-label={`Demostración de ${project.title}`} /> : 
          <div className="video-placeholder">
            <span>▷</span>
            <p>Vídeo pendiente</p>
            <small>Añade tu vídeo a este proyecto</small>
          </div>}
      </div>
      <a className="next-project" href={`#/proyecto/${projects[(projects.indexOf(project) + 1) % projects.length].id}`}>
        <small>SIGUIENTE PROYECTO</small>
        <span>{projects[(projects.indexOf(project) + 1) % projects.length].title} ↗</span>
      </a>
    </main> : <main>                                                                                      {/* Pagina principal */}
      <section className="hero">                                                                          {/* Encabezado pagina principal */}
        <div id="wrapper">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {t('eyebrow')}</p>
            <h1><em>MARCOS</em><br />FILGUEIRAS<br />BAAMONDE<br /></h1>
            <p className="intro">{t('intro')}</p>
            <button className="primary" onClick={() => goSection('proyectos')}>{t('explore')} <span><Arrow /></span></button>
            <span className="hero-caption">{t('herocaption')}</span>
          </div>
          <div className="waves-wrapper">
          <PatternWaves preset="lines" color="#ff6a00" backgroundColor="#101113" fade="edges" interactive cursorSize={125} cursorStrength={0.1} pattern="plus" wave="ripple" spacing={5} markSize={1}
            depth={0.5} light={0} shine={0.1} contrast={2.5} speed={0.3} scale={1} direction={31} opacity={1} fadeSize={1} characters=".:-=+*#%@" intro paused={false}/>
          </div>
        </div>
      </section>
      <div className="hero-bottom">
        <span>{t('hero-bottom')}</span>
        <button onClick={() => goSection('proyectos')}>{t('hero-next')} <span>↓</span></button>
      </div>
      <section id="proyectos" className="projects-section">                                                         {/* Lista de proyectos */}
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('project-section')}</p>
            <h2><ConditionalInterrogation l={language}/>{t('project-sectitle')}<span>?</span></h2>
          </div>
          <p className="projects-desc">{category === 'Todos' ? t('project-gendesc') : category === 'Videojuegos' ? t('project-gamedesc') : t('project-codedesc')}</p>
        </div>
        <div className="filter-bar">
          <div className="segmented" role="group" aria-label="Tipo de proyecto">
            <div className="segment-indicator" style={{ transform: `translateX(${(['Todos', 'Videojuegos', 'Programación'] as Category[]).indexOf(category) * 100}%)` }} />
            {(['Todos', 'Videojuegos', 'Programación'] as Category[]).map(c => <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c === 'Todos' ? t('project-filter-all') : c === 'Videojuegos' ? t('project-filter-games') : t('project-filter-code')}</button>)}
          </div>
          <span className="project-count">{String(filtered.length).padStart(2, '0')} {t('project-count')}</span>
        </div>
        <div className="filter-tags">
          <span>{t('project-filter-tags')}</span>
          {tags.map(t => <button key={t} aria-pressed={selectedTags.includes(t)} className={selectedTags.includes(t) ? 'active' : ''} onClick={() => setSelectedTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])}>{t}</button>)}{selectedTags.length > 0 && <button className="clear" onClick={() => setSelectedTags([])}>Limpiar ×</button>}
        </div>
        <div className="project-grid">{filtered.map((p) => <a className="project-card" key={p.id} href={`#/proyecto/${p.id}`}>
          <div className="card-image">
            <Art kind={p.art} title={p.title} />
            <span className="card-category">{p.category === 'Todos' ? t('project-filter-alltag') : p.category}</span>
            {p.featured ?
            (<><span className="featured-tag">
                <span className="star" aria-hidden="true" />
                {t('featured')}
              </span></>) : null}
            <span className="card-open"><Arrow /></span>
          </div>
          <div className="card-top">
            <h3>{p.title}<span></span></h3>
            <p className="card-year">{p.year}</p>
          </div>
          <p>{p.description}</p>
        </a>)}</div>
        {!filtered.length && <div className="empty">
            <h3>{t('no-combination-title')}</h3>
            <p>{t('no-combination-desc')}</p>
            <button onClick={() => { setSelectedTags([]); setCategory('Todos') }}>{t('no-combination-button')}</button>
          </div>}
      </section>
      <section id="sobre-mi" className="about">                                                   {/* Sobre mi */}
        <p className="eyebrow">{t('about-section')}</p>
        <div>
            <div>
            <h2 className="about-header">{t('about-title1')} {t('about-title2')}<span>.</span></h2>
            <p className="about-description">{t('about-desc1')} {t('about-desc2')} {t('about-desc3')} {t('about-desc4')}</p>
            <strong className="about-description">{t('about-desc-me')}</strong>
            </div>
            <img className="profile-image" src={pfimagen} alt="Descripción de la imagen" loading="lazy"/>
          
        </div>
      </section>
      <section id="contacto" className="contact"> {/* Contacto */}
        <p className="eyebrow">{t('contact-section')}</p>
        <h2><ConditionalInterrogation l={language}/>{t('contact-title')}<span>?</span></h2>
        <div>
          <div className="contact-links">
            <a href="tel:+34665516462">{t('contact-phone')}(+34) 665 51 64 62</a>
            <a href="mailto:m.filgueirasbaamonde@gmail.com">{t('contact-email')}m.filgueirasbaamonde@gmail.com</a>
          </div>
          <p className="song">Hey, I just met you<br/>and this is crazy<br/>but here's my number<br/>so call me, maybe</p>
        </div>
        <a href="https://github.com/mfilgbaam" target="_blank" rel="noreferrer">Encuéntrame en GitHub <Arrow /></a>
      </section>
    </main>}
    <footer>                                                          {/* Pie de página */}
      <button className="brand" onClick={home}>m<span>.</span></button>
      <p>Hecho con intención. Y con React + TypeScript.</p>
      <span>© {new Date().getFullYear()} · Portfolio</span>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba">↑</button>
    </footer>
    {lightbox && project && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Imagen de ${project.title}`} onClick={() => setLightbox(false)}><button autoFocus onClick={() => setLightbox(false)} aria-label="Cerrar imagen">Cerrar ×</button><Art kind={project.art} title={project.title} /></div>}
  </>
}
export default App
