import ProjectLayout from './ProjectUtils'
import { FullImage, FullVideo, HalfImage, HalfVideo, ProjectDesc, type Link } from './ProjectUtils'
import './i18n'

import placeholder from './assets/placeholder.webp'
import { t } from 'i18next'

import github from './assets/github.webp'
import itchio from './assets/itchio.webp'
import neboasflujo from './assets/flujoneboas.webp'
import neboasintro from './assets/neboasintro.mp4'

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
        <ProjectDesc title='Orbital' desc={[t("lorem-ipsum")]} Media={() => <FullImage image={placeholder} desc=''/> } links={Links}/>
        <ProjectDesc title='Orbital' desc={[t("lorem-ipsum")]} Media={() => <FullVideo video='/portfolio/media/orbital.mp4' />} links={Links}/>
        <HalfImage image={placeholder} textleft={true} texts={['']} desc=''/>
        <FullImage image={placeholder} desc=''/>
        <FullVideo video='/portfolio/media/orbital.mp4' />
        <HalfImage image={placeholder} textleft={true} texts={['Tetxo']} desc=''/>
        <HalfVideo video={placeholder} textleft={true} texts={["Tetxo"]}/>
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
        { id: 'uxdesign', label: t("neboas-uxdesign") },
        { id: 'potdesign', label: t("neboas-potdesign") },
        { id: 'uidesign', label: t("neboas-uidesign") },
      ]}
    >
        <section id="intro">
            <ProjectDesc title="Neboa's Hut" desc={[t("neboas-intro"), t("neboas-intro2")]} Media={() => <FullVideo video={neboasintro} /> } links={Links}/>
        </section>
        <section id="mirol">
            <h2 className='project-sectitle'>{t("myrole-nav")}</h2>
            <p className="project-text">{t("neboas-role")}</p>
            <ul>
                <li>{t("neboas-role-en1")}</li>
                <li>{t("neboas-role-en2")}</li>
                <li>{t("neboas-role-en3")}</li>
                <li>{t("neboas-role-en4")}</li>
                <li>{t("neboas-role-en5")}</li>
                <li>{t("neboas-role-en6")}</li>
                <li>{t("neboas-role-en7")}</li>
            </ul>
        </section>
        <section id='uxdesign'>
          <h2 className='project-sectitle'>{t("neboas-uxdesign")}</h2>
          <p className="project-text">{t("neboas-design1")}</p>
          
          
        </section>
        <section id='potdesign'>
          <h2 className='project-sectitle'>{t("neboas-potdesign")}</h2>
          <HalfImage image={placeholder} textleft={false} texts={[t("neboas-design2")]} desc=''/>
          <HalfImage image={placeholder} textleft={true} texts={[t("neboas-design3"),t("neboas-design4") ]} desc=''/>
        </section>
        <section id='uidesign'>
          <h2 className='project-sectitle'>{t("neboas-uidesign")}</h2>
          <HalfImage image={neboasflujo} textleft={false} texts={[t("neboas-design5"),t("neboas-design6")]} desc=''/>
          
        </section>
    </ProjectLayout>
    )
}