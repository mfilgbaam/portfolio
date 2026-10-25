import { useState, type ComponentType, type ReactNode } from 'react'
import YouTube from "react-youtube"

type Section = {
  id: string
  label: string
}

function Sidebar({sections} : {sections: Section[]}) {
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    return window.matchMedia("(min-width: 769px)").matches;
  });

  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="main-sidebar"
      >
        <span className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
        </span>
      </button>

      <aside
        id="main-sidebar"
        className={`sidebar ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >

        <nav className="sidebar-nav">
          {sections.map(section => (
            <button className="nav-item"
              key={section.id}
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}



type ProjectLayoutProps = {
  sections: Section[]
  children: ReactNode
}

export default function ProjectLayout({
  sections,
  children,
}: ProjectLayoutProps) {
  return (
    <div className="project-layout">
      <Sidebar sections={sections}/>

      <div className="project-content">{children}</div>
    </div>
  )
}

export function FullImage({image, desc}: {image: string, desc: string}){
  return(
    <div>
    <img className="image-full" src={image} alt={desc} loading="lazy"/>
    </div>
  )
}

export function HalfImage({image, textleft, texts, desc}: {image: string,textleft: boolean,texts: string[], desc: string})
{
  return(
    <div className="half-content">
      {textleft && <TextsParagraph texts={texts}/>}
      <img className="image-half" src={image} alt={desc} loading="lazy"/>
      {!textleft && <TextsParagraph texts={texts}/>}
    </div>
  )
}

export function FullVideo({video}: {video: string}){
  return(
    <video className="video-full" controls playsInline autoPlay muted loop >
      <source src={video} type="video/mp4" />
    </video>
  )
}

function TextsParagraph({texts}: {texts: string[]}){
  return(
    <div>
    {texts.map(t => <><p className="half-text">{t}</p><br /></>)}
    </div>
  )
}

export function HalfVideo({video, textleft, texts}: {video: string, textleft: boolean,texts: string[]}){
  return(
    <div className="half-content">
      {textleft && <TextsParagraph texts={texts}/>}
      <video className="video-half" controls playsInline autoPlay muted loop >
        <source src={video} type="video/mp4" />
      </video>
      {!textleft && <TextsParagraph texts={texts}/>}
    </div>
  )
}

export function ProjectDesc({title, desc, Media, links}: {title: string, desc: string[], Media: ComponentType, links:Link[]}){
  return(
    <div className="half-content">
      <div className="project-basics">
        <ProjectTitle title={title}/>
        <TextsParagraph texts={desc}/>
        <div className="page-links">
        {links.map(l => <ProjectLink link={l.link} image={l.image} text={l.text}/>)}
        </div>
      </div>
      <Media/>
    </div>
  )
}

export type Link = {
  link : string
  image : string
  text: string
}


export function ProjectTitle({title}: {title: string}){
  return(
    <h1 className='project-title'>{title}<span>.</span></h1>
  )
}

export function Arrow() { return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg> }

function ContactLogo({ src }: { src: string; }) {
  return <img className="contact-logo" src={src} alt="Descripción" loading="lazy"/>
}

export function ProjectLink({link, image, text}: {link: string, image: string, text: string}){
  return(
    <a className="page-link" href={link} target="_blank" rel="noreferrer"><ContactLogo src={image} />{text} <Arrow /></a>
  )
}

export function YoutubeVideo({id}: {id: string}){

  return(
    <YouTube className="video-full" videoId={id} id="video"/>
  )
}
