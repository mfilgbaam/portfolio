import { useState, type ReactNode } from 'react'

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

export function HalfImage({image, textleft, text, desc}: {image: string,textleft: boolean,text: string, desc: string})
{
  return(
    <div className="half-content">
      {textleft && <p className="half-text">{text}</p>}
      <img className="image-half" src={image} alt={desc} loading="lazy"/>
      {!textleft && <p className="half-text">{text}</p>}
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

export function HalfVideo({video, textleft, text}: {video: string, textleft: boolean,text: string}){
  return(
    <div className="half-content">
      {textleft && <p className="half-text">{text}</p>}
      <video className="video-half" controls playsInline autoPlay muted loop >
        <source src={video} type="video/mp4" />
      </video>
      {!textleft && <p className="half-text">{text}</p>}
    </div>
  )
}

