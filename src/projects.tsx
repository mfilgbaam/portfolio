import type { ReactNode } from 'react'

type Section = {
  id: string
  label: string
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
      <aside className="project-sidebar">
        <nav aria-label="Secciones del proyecto">
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