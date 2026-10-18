import ProjectLayout from './ProjectUtils'
import { FullImage, FullVideo, HalfImage, HalfVideo, ProjectDesc } from './ProjectUtils'
import './i18n'

import placeholder from './assets/placeholder.webp'
import { t } from 'i18next'

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
        <ProjectDesc title='Orbital' desc={t("lorem-ipsum")} Media={() => <FullImage image={placeholder} desc=''/>}/>
        <ProjectDesc title='Orbital' desc={t("lorem-ipsum")} Media={() => <FullVideo video='/portfolio/media/orbital.mp4' />}/>
        <HalfImage image={placeholder} textleft={true} text='' desc=''/>
        <FullImage image={placeholder} desc=''/>
        <FullVideo video='/portfolio/media/orbital.mp4' />
        <HalfImage image={placeholder} textleft={true} text='Tetxo' desc=''/>
        <HalfVideo video={placeholder} textleft={true} text='Tetxo'/>
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