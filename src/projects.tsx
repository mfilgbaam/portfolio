import { useState, type ReactNode } from 'react'

type Section = {
  id: string
  label: string
}

function Sidebar({sections} : {sections: Section[]}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="main-sidebar"
      >
      </button>

      <aside
        id="main-sidebar"
        className={`sidebar ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >

        <nav className="sidebar-nav">
          {sections.map(section => (
            <button
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

export function ProjectLayout({
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

export default function OrbitalPage() {
  return (
    <ProjectLayout
      sections={[
        { id: 'resumen', label: 'Resumen' },
        { id: 'mecanicas', label: 'Mecánicas' },
        { id: 'gameplay', label: 'Gameplay' },
      ]}
    >
      <section id="resumen">
        <h1>Orbital</h1>
        <p>Una aventura espacial.</p>
      </section>

      <section id="mecanicas">
        <h2>Mecánicas</h2>
        <p>Exploración y movimiento orbital.</p>
      </section>

      <section id="gameplay">
        <h2>Gameplay</h2>
        <video src="/portfolio/media/orbital.mp4" controls />
      </section>
    </ProjectLayout>
  )
}