import { type ComponentType, useEffect, useState } from 'react'
import './App.css'
import './i18n'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import PatternWaves from './PatternWaves'
import pfimagen from './assets/profile.webp'
import github from './assets/github.webp'
import linkedin from './assets/linkedin.webp'
import itchio from './assets/itchio.webp'
import neboas from './assets/neboasmain.webp'
import petanca from './assets/petanca.webp'
import asteroids from './assets/Asteroids.webp'
import volcano from './assets/volcanogame.webp'
import {NeboasPage, PetancaPage, AsteroidsPage, VolcanoPage} from './Projects'
import {ProjectLink, Arrow} from './ProjectUtils'


type Category = 'Todos' | 'Videojuegos' | 'Programación'
type Language = 'EN' | 'ES'
const tags = ['Unreal Engine', 'C++', 'Godot', 'React', 'TypeScript', 'UI/UX', 'Node.js', 'OpenGL', 'Engine Tools'] as const
type Tag = typeof tags[number]
type Project = { id: string; title: string; category: Category; description: string; tags: Tag[]; year: string; art: string; page: ComponentType ;images?: { src: string; alt: string }[]; video?: string; featured?: boolean }

function getProjects(){
const projects: Project[] = [
  { id: 'neboas', title: t("neboas-title"), category: 'Videojuegos', description: t("neboas-card"), tags: ['Unreal Engine', 'C++', 'UI/UX'], year: '2026', art: neboas, page: NeboasPage, featured: true },
  { id: 'petanca', title: "Petanca OpenGL", category: 'Todos', description: t("neboas-card"), tags: ['OpenGL', 'C++', 'Engine Tools'], year: '2022', art: petanca, page: PetancaPage, featured: true },
  { id: 'asteroids', title: "Asteroids OpenGL", category: 'Todos', description: t("neboas-card"), tags: ['OpenGL', 'C++', 'Engine Tools'], year: '2022', art: asteroids, page: AsteroidsPage, featured: false },
    { id: 'volcano', title: "Volcano Game OpenGL", category: 'Todos', description: t("neboas-card"), tags: ['OpenGL', 'C++', 'Engine Tools'], year: '2022', art: volcano, page: VolcanoPage, featured: false },
]
projects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || parseInt(b.year) - parseInt(a.year))
    
return projects
}
  
function ConditionalInterrogation({ l }: { l: Language }){return <span>{(l === 'ES' ? '¿' : '')}</span>}


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

  
  const project = getProjects().find(p => route === `#/proyecto/${p.id}`)
  const ProjectPage = project?.page
  const unknown = route.startsWith('#/proyecto/') && !project
  const filtered = getProjects().filter(p => (category === 'Todos' || p.category === category || p.category === 'Todos') && selectedTags.every(t => p.tags.includes(t)))
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
      <button className="back" onClick={() => goSection('proyectos')}>← {t("back")}</button>
      <div className="tag-list">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      {ProjectPage ? <ProjectPage /> : null}
      
    <button className="back" style={{ marginTop: '50px' }} onClick={() => goSection('proyectos')}>← {t("back")}</button>
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
            <img className='image-art' src={p.art} alt='' loading="lazy"/>
            <span className="card-category">{p.category === 'Todos' ? t('project-filter-alltag') : p.category === 'Videojuegos' ? t('project-filter-games') : t('project-filter-code')}</span>
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
          <div className="card-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
          
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
            <p className="about-description">{t('about-desc1')} {t('about-desc2')}<br/> {t('about-desc3')} {t('about-desc4')}</p>
            <strong className="about-description">{t('about-desc-me')}</strong>
            </div>
            <img className="profile-image" src={pfimagen} alt="Descripción de la imagen" loading="lazy"/>
          
        </div>
      </section>
      <section id="contacto" className="contact"> {/* Contacto */}
        <p className="eyebrow">{t('contact-section')}</p>
        <h2><ConditionalInterrogation l={language}/>{t('contact-title')}<span>?</span></h2>
        <div className="contact-info">
          <div className="contact-links">
            <a href="tel:+34665516462">{t('contact-phone')}(+34) 665 51 64 62</a>
            <a href="mailto:m.filgueirasbaamonde@gmail.com">{t('contact-email')}m.filgueirasbaamonde@gmail.com</a>
          </div>
          <p className="song">Hey, I just met you<br/>and this is crazy<br/>but here's my number<br/>so call me, maybe</p>
        </div>
        <div className="page-links">
        
          <ProjectLink link="https://github.com/mfilgbaam" image={github} text={t('contact-github')}/>
         
          <ProjectLink link="https://shadowlinkv5.itch.io/" image={itchio} text={t('contact-itchio')}/>
          
          <ProjectLink link="https://www.linkedin.com/in/marcos-filgueiras-baamonde-a70bab1b0" image={linkedin} text={t('contact-linkedin')}/>
        </div>
      </section>
    </main>}
    <footer>                                                          {/* Pie de página */}
      <button className="brand" onClick={home}>m<span>.</span></button>
      <p>{t('footer-text')}</p>
      <span>© {new Date().getFullYear()} · Portfolio</span>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba">↑</button>
    </footer>
  </>
}
export default App
