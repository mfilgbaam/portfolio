import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import './App.css'

type Category = 'Todos' | 'Videojuegos' | 'Programación'
type Project = { id: string; title: string; category: Exclude<Category, 'Todos'>; description: string; tags: string[]; year: string; art: string; detail: string; images?: { src: string; alt: string }[]; video?: string }
const projects: Project[] = [
  { id: 'orbital', title: 'Orbital', category: 'Videojuegos', description: 'Una aventura espacial donde cada órbita cuenta.', tags: ['Unity', 'C#', '3D'], year: '2025', art: 'space', detail: 'Un concepto de exploración espacial centrado en el movimiento y el descubrimiento. El jugador navega entre pequeños mundos, encuentra nuevas rutas y aprende a utilizar la gravedad a su favor.' },
  { id: 'flow', title: 'Flow', category: 'Programación', description: 'Menos ruido. Más foco. Tu trabajo, en un solo lugar.', tags: ['React', 'TypeScript', 'UI/UX'], year: '2025', art: 'dashboard', detail: 'Un concepto de aplicación para organizar proyectos y tareas con una interfaz clara. La propuesta reúne tableros, actividad y prioridades para hacer más fácil el trabajo diario.' },
  { id: 'ember', title: 'Ember', category: 'Videojuegos', description: 'Un pequeño héroe en un mundo que se apaga.', tags: ['Godot', '2D', 'Pixel art'], year: '2024', art: 'pixel', detail: 'Un concepto de plataformas en pixel art sobre una pequeña criatura que lleva luz a un mundo olvidado. La exploración, los saltos y una atmósfera cálida guían la experiencia.' },
  { id: 'nexus', title: 'Nexus', category: 'Programación', description: 'Una API pensada para conectar ideas y herramientas.', tags: ['TypeScript', 'Node.js', 'API'], year: '2024', art: 'code', detail: 'Un concepto de API modular para conectar aplicaciones. Su diseño prioriza contratos claros, respuestas consistentes y una documentación fácil de seguir.' },
]
function Arrow() { return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg> }
const tags = [...new Set(projects.flatMap(p => p.tags))]

function Art({ kind, title }: { kind: string; title: string }) {
  return <div className={`art art-${kind}`} role="img" aria-label={`Ilustración de ${title}`}>
    {kind === 'space' && <><div className="stars" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet" /><span className="art-word">ORBITAL<span>BEYOND THE KNOWN</span></span><span className="coordinate">SECTOR 07 / 042.8</span></>}
    {kind === 'dashboard' && <div className="mock-app"><div className="mock-sidebar"><b>◈ flow</b><span>▦ Overview</span><span>▤ Projects</span><span>◷ Activity</span><span>⚙ Settings</span></div><div className="mock-content"><small>WORKSPACE</small><h3>Good morning, Alex <span>✦</span></h3><div className="mock-stats"><div>Projects<b>12 <i>↗</i></b></div><div>In progress<b>04</b></div><div>Completed<b>28</b></div></div><h4>Your projects <span>+ New project</span></h4><div className="mock-row"><i />Website redesign<span>In progress</span></div><div className="mock-row"><i />Mobile application<span>Planning</span></div><div className="mock-row"><i />Design system<span>Review</span></div></div></div>}
    {kind === 'pixel' && <><div className="pixel-moon" /><div className="mountains" /><div className="pixel-ground" /><div className="pixel-person">✦</div><span className="pixel-title">EMBER<small>A LITTLE LIGHT IN THE DARK</small></span></>}
    {kind === 'code' && <div className="code-window"><div className="window-dots">● ● ● <span>nexus / routes.ts</span></div><pre><span>// Ideas, connected.</span>{'\n'}<em>import</em> {'{ Router }'} <em>from</em> <i>'nexus'</i>{'\n\n'}<em>const</em> api = <b>Router</b>(){'\n\n'}api.<b>get</b>(<i>'/projects'</i>, <em>async</em> () =&gt; {'{\n'}{'  '}<em>return</em> {'{'}{'\n'}{'    '}status: <i>'connected'</i>,{'\n'}{'    '}possibilities: <b>Infinity</b>{'\n  }\n})'}</pre><div className="code-status">● All systems connected <span>TypeScript</span></div></div>}
  </div>
}

function App() {
  const [route, setRoute] = useState(window.location.hash)
  const [category, setCategory] = useState<Category>('Todos')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [spin, setSpin] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [lightbox, setLightbox] = useState(false)
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
  const project = projects.find(p => route === `#/proyecto/${p.id}`)
  const unknown = route.startsWith('#/proyecto/') && !project
  const filtered = projects.filter(p => (category === 'Todos' || p.category === category) && selectedTags.every(t => p.tags.includes(t)))
  const home = () => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const goSection = (id: string) => { if (project || unknown) { window.location.hash = ''; setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0) } else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <>
    <header className="header"><button className="brand" onClick={home} aria-label="Ir a inicio">m<span>.</span><span className="brand-name">portfolio / dev</span></button><nav aria-label="Navegación principal"><button onClick={() => goSection('proyectos')}>Proyectos</button><button onClick={() => goSection('sobre-mi')}>Sobre mí</button><button className="contact-nav" onClick={() => goSection('contacto')}>Hablemos <span><Arrow /></span></button></nav></header>
    {unknown ? <main className="detail"><p className="eyebrow">404 / PROYECTO NO ENCONTRADO</p><h1>Esta idea aún no existe.</h1><button className="primary" onClick={home}>Volver al portfolio ↗</button></main> : project ? <main className="detail">
      <button className="back" onClick={() => goSection('proyectos')}>← Volver a proyectos</button><div className="detail-heading"><div><p className="eyebrow">{project.category} / {project.year}</p><h1>{project.title}<span>.</span></h1><p>{project.description}</p></div><div className="tag-list">{project.tags.map(t => <span key={t}>{t}</span>)}</div></div>
      <Art kind={project.art} title={project.title} /><div className="detail-copy"><h2>Detrás de la idea</h2><div><p>{project.detail}</p><p className="sample-note">Proyecto de ejemplo · Las ilustraciones son conceptuales. Sustituye este contenido por tu trabajo y tus recursos.</p></div></div>
      <div className="gallery-heading"><h2>Una mirada más cerca<span>.</span></h2><span>GALERÍA / 01</span></div>{project.images?.map(image => <figure className="real-image" key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.alt}</figcaption></figure>)}<button className="gallery-image" onClick={() => setLightbox(true)} aria-label={`Ampliar imagen de ${project.title}`}><Art kind={project.art} title={project.title} /><span>Ampliar imagen <Arrow /></span></button>
      <div className="video-block"><div><p className="eyebrow">EN MOVIMIENTO</p><h2>El proyecto en acción</h2><p>Espacio preparado para un vídeo de gameplay o una demostración.</p></div>{project.video ? <video className="project-video" src={project.video} controls preload="metadata" aria-label={`Demostración de ${project.title}`} /> : <div className="video-placeholder"><span>▷</span><p>Vídeo pendiente</p><small>Añade tu vídeo a este proyecto</small></div>}</div>
      <a className="next-project" href={`#/proyecto/${projects[(projects.indexOf(project) + 1) % projects.length].id}`}><small>SIGUIENTE PROYECTO</small><span>{projects[(projects.indexOf(project) + 1) % projects.length].title} ↗</span></a>
    </main> : <main>
      <section className="hero" onPointerMove={e => { const r = e.currentTarget.getBoundingClientRect(); setPointer({ x: (e.clientX - r.left - r.width / 2) / 35, y: (e.clientY - r.top - r.height / 2) / 35 }) }} onPointerLeave={() => setPointer({ x: 0, y: 0 })}>
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> CÓDIGO, CREATIVIDAD Y UN POCO DE CAFÉ</p><h1>Ideas que se<br />juegan<span>.</span><br />Código que<br /><em>conecta.</em></h1><p className="intro">Desarrollo videojuegos y experiencias digitales.<br />Transformo ideas en mundos que explorar y<br className="desktop-break" /> herramientas que hacen la vida más sencilla.</p><button className="primary" onClick={() => goSection('proyectos')}>Explorar proyectos <span><Arrow /></span></button><span className="hero-caption">DE LA PRIMERA IDEA AL ÚLTIMO PIXEL.</span></div>
        <div className="hero-visual" style={{ '--px': `${pointer.x}deg`, '--py': `${-pointer.y}deg` } as CSSProperties}><div className="visual-grid" /><span className="visual-label">PLAY. BUILD. REPEAT.</span><div className={`sculpture ${spin ? 'spinning' : ''}`}><div className="sculpture-ring ring-a" /><div className="sculpture-ring ring-b" /><div className="sculpture-ring ring-c" /><div className="sculpture-core" /></div><span className="floating-chip chip-code">&lt;/&gt;</span><span className="floating-chip chip-play">✦</span><span className="visual-index">FIG. 01 — IDEAS EN ÓRBITA</span><button className="orbit-button" onClick={() => setSpin(!spin)} aria-pressed={spin}>{spin ? 'Ⅱ Pausar' : '↻ Dale una vuelta'}</button></div>
      </section>
      <div className="hero-bottom"><span>DESARROLLADOR · CREADOR · CURIOSO</span><button onClick={() => goSection('proyectos')}>SIGUE EXPLORANDO <span>↓</span></button></div>
      <section id="proyectos" className="projects-section"><div className="section-heading"><div><p className="eyebrow">01 / TRABAJO SELECCIONADO</p><h2>De la idea a la realidad<span>.</span></h2></div><p>Una selección de mundos, herramientas<br />y cosas que me gusta construir.</p></div>
        <div className="filter-bar"><div className="segmented" role="group" aria-label="Tipo de proyecto"><div className="segment-indicator" style={{ transform: `translateX(${(['Todos', 'Videojuegos', 'Programación'] as Category[]).indexOf(category) * 100}%)` }} />{(['Todos', 'Videojuegos', 'Programación'] as Category[]).map(c => <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c === 'Todos' ? '▦' : c === 'Videojuegos' ? '⊕' : '⌘'} {c}</button>)}</div><span className="project-count">{String(filtered.length).padStart(2, '0')} proyectos</span></div>
        <div className="filter-tags"><span>FILTRAR POR</span>{tags.map(t => <button key={t} aria-pressed={selectedTags.includes(t)} className={selectedTags.includes(t) ? 'active' : ''} onClick={() => setSelectedTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])}>{t}</button>)}{selectedTags.length > 0 && <button className="clear" onClick={() => setSelectedTags([])}>Limpiar ×</button>}</div>
        <div className="project-grid">{filtered.map((p, i) => <a className="project-card" key={p.id} href={`#/proyecto/${p.id}`}><div className="card-image"><Art kind={p.art} title={p.title} /><span className="card-category">{p.category === 'Videojuegos' ? '⊕' : '⌘'} {p.category}</span><span className="card-open"><Arrow /></span></div><div className="card-top"><h3>{p.title}<span> <Arrow /></span></h3><span>{p.year}</span></div><p>{p.description}</p><div className="card-tags">{p.tags.map(t => <span key={t}>{t}</span>)}<span className="card-number">/ 0{i + 1}</span></div></a>)}</div>
        {!filtered.length && <div className="empty"><h3>Ningún proyecto con esta combinación.</h3><p>Prueba con menos tags para descubrir otras ideas.</p><button onClick={() => { setSelectedTags([]); setCategory('Todos') }}>Ver todos los proyectos ↗</button></div>}
        <p className="sample-label">SELECCIÓN DE EJEMPLO · UN ESPACIO PARA TUS PRÓXIMAS IDEAS</p>
      </section>
      <section id="sobre-mi" className="about"><p className="eyebrow">02 / DETRÁS DEL CÓDIGO</p><div><h2>La curiosidad es<br />mi punto de partida<span>.</span></h2><div><p>Me interesa lo que pasa cuando la tecnología y la creatividad se encuentran. Desde una mecánica de juego hasta una interfaz, busco crear experiencias que se sientan bien.</p><p>Este es mi espacio para experimentar, aprender y compartir lo que construyo.</p><div className="about-tags"><span>⌘ Desarrollo</span><span>⊕ Videojuegos</span><span>✦ Creatividad</span></div></div></div></section>
      <section id="contacto" className="contact"><p className="eyebrow">03 / LA PRÓXIMA IDEA</p><h2>¿Construimos algo<br /><em>interesante?</em> <span><Arrow /></span></h2><p>Las buenas historias empiezan con una conversación.</p><a href="https://github.com/mfilgbaam" target="_blank" rel="noreferrer">Encuéntrame en GitHub <Arrow /></a></section>
    </main>}
    <footer><button className="brand" onClick={home}>m<span>.</span></button><p>Hecho con intención. Y con React + TypeScript.</p><span>© {new Date().getFullYear()} · Portfolio</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba">↑</button></footer>
    {lightbox && project && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Imagen de ${project.title}`} onClick={() => setLightbox(false)}><button autoFocus onClick={() => setLightbox(false)} aria-label="Cerrar imagen">Cerrar ×</button><Art kind={project.art} title={project.title} /></div>}
  </>
}
export default App
