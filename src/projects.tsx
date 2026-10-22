import ProjectLayout from './ProjectUtils'
import { FullImage, FullVideo, HalfImage, HalfVideo, ProjectDesc, type Link } from './ProjectUtils'
import './i18n'

import placeholder from './assets/placeholder.webp'
import { t } from 'i18next'

import github from './assets/github.webp'
import itchio from './assets/itchio.webp'
import neboasflujo from './assets/flujoneboas.webp'
import neboasintro from './assets/neboasintro.mp4'
import petanca from './assets/PetancaOpenGL.mp4'
import asteroids from './assets/AsteroidOpenGL.mp4'
import volcan from './assets/VolcanoGame.mp4'
import descripcionlibro from './assets/descripcionlibro.webp'
import mortero from './assets/morteroweb.mp4'
import menulibro from './assets/menulibro.mp4'
import colisioneslibro from './assets/colisioneslibro.mp4'
import optimizations from './assets/optimizations.webp'



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
        { id: 'menucurve', label: t("neboas-menucurve") },
        { id: 'optimizations', label: t("neboas-optimizations") },
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
          <HalfImage image={descripcionlibro} textleft={false} texts={[t("neboas-design2")]} desc=''/>
          <HalfVideo video={mortero} textleft={true} texts={[t("neboas-design3"),t("neboas-design4") ]}/>
        </section>
        <section id='uidesign'>
          <h2 className='project-sectitle'>{t("neboas-uidesign")}</h2>
          <HalfImage image={neboasflujo} textleft={false} texts={[t("neboas-design5"),t("neboas-design6")]} desc=''/>
          
        </section>
        <section id='menucurve'>
          <h2 className='project-sectitle'>{t("neboas-menucurve")}</h2>
          <HalfVideo video={menulibro} textleft={true} texts={[t("neboas-curve1"),t("neboas-curve2") ]}/>
          <HalfVideo video={colisioneslibro} textleft={false} texts={[t("neboas-curve3") ]}/>
        </section>
        <section id='optimizations'>
          <h2 className='project-sectitle'>{t("neboas-optimizations")}</h2>
          <HalfImage image={optimizations} textleft={true} texts={[t("neboas-opt1"),t("neboas-opt2")]} desc=''/>
        </section>

    </ProjectLayout>
    )
}

export function PetancaPage(){
  const Links: Link[] = [
          {link : "https://github.com/mfilgbaam/PetancaOpenGL", image : github, text: t("github-link") },
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
            <ProjectDesc title="Neboa's Hut" desc={[t("neboas-intro"), t("neboas-intro2")]} Media={() => <FullVideo video={petanca} /> } links={Links}/>
        </section>
    </ProjectLayout>
  )
} 

export function AsteroidsPage(){
  const Links: Link[] = [
          {link : "https://github.com/mfilgbaam/AsteroidsOpenGL", image : github, text: t("github-link") },
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
            <ProjectDesc title="Neboa's Hut" desc={[t("neboas-intro"), t("neboas-intro2")]} Media={() => <FullVideo video={asteroids} /> } links={Links}/>
        </section>
    </ProjectLayout>
  )
} 

export function VolcanoPage(){
  const Links: Link[] = [
          {link : "https://github.com/mfilgbaam/VolcanoGameOpenGL", image : github, text: t("github-link") },
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
            <ProjectDesc title="Neboa's Hut" desc={[t("neboas-intro"), t("neboas-intro2")]} Media={() => <FullVideo video={volcan} /> } links={Links}/>
        </section>
    </ProjectLayout>
  )
} 