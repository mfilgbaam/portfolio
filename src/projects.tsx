import ProjectLayout from './ProjectUtils'
import { FullImage, FullVideo, HalfImage, HalfVideo, ProjectDesc, type Link } from './ProjectUtils'
import './i18n'

import placeholder from './assets/placeholder.webp'
import { t } from 'i18next'

import github from './assets/github.webp'
import itchio from './assets/itchio.webp'
import neboasmain from './assets/neboasmain.webp'

export default function OrbitalPage() {

    const Links: Link[] = [
        {link : "", image : github, text: t("github-link") },
        {link : "", image : itchio, text: t("itchio-link") }
    ]
  return (
    <ProjectLayout
      sections={[
        { id: 'resumen', label: 'Resumen' },
        { id: 'mecanicas', label: 'Mecánicas' },
        { id: 'gameplay', label: 'Gameplay' },
      ]}
    >
      <section id="resumen">
        <ProjectDesc title='Orbital' desc={t("lorem-ipsum")} Media={() => <FullImage image={placeholder} desc=''/> } links={Links}/>
        <ProjectDesc title='Orbital' desc={t("lorem-ipsum")} Media={() => <FullVideo video='/portfolio/media/orbital.mp4' />} links={Links}/>
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

export function NeboasPage(){
    const Links: Link[] = [
        {link : "https://conxuro-studio.itch.io/neboashut", image : itchio, text: t("itchio-link") },
    ]

    return(
        <ProjectLayout
      sections={[
        { id: 'intro', label: t("intro-nav") },
        { id: 'mirol', label: t("myrole-nav") },
        { id: 'gameplay', label: 'Gameplay' },
      ]}
    >
        <section id="intro">
            <ProjectDesc title="Neboa's Hut" desc={t("lorem-ipsum")} Media={() => <FullImage image={neboasmain} desc=''/> } links={Links}/>
        </section>
        <section id="mirol">
            <h2 className='project-sectitle'>{t("myrole-nav")}</h2>
            <p>Mi rol</p>
        </section>
    </ProjectLayout>
    )
}