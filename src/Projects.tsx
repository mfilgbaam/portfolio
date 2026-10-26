import ProjectLayout, { FullImage } from './ProjectUtils'
import {FullVideo, HalfImage, HalfVideo, YoutubeVideo, ProjectDesc, type Link } from './ProjectUtils'
import './i18n'


import { t } from 'i18next'

import github from './assets/github.webp'
import itchio from './assets/itchio.webp'
import doc from './assets/docicon.webp'
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
import charmovement from './assets/bathroom movement.mp4'
import enemyia from './assets/bathroomenemies.mp4'
import inventory from './assets/inventory.webp'
import mainmenu from './assets/mainmenu.mp4'
import pieces from './assets/map pieces.webp'
import throne from './assets/throne.webp'
import bigroom from './assets/bigroom.webp'
import flooded from './assets/flooded.webp'
import shoot from './assets/bathroomshoot.mp4'
import ult from './assets/bathroomult.mp4'
import molevideo from './assets/molevideo.mp4'
import portfolioimage from './assets/Portfolio-web.webp'





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
        { id: 'whatbuilt', label: t("whatbuilt-nav") },
        { id: 'objective', label: t("objective-nav") },
      ]}
    >
      <section id="intro">
            <ProjectDesc title={t("petanca-title")} desc={[t("petanca-desc1"), t("petanca-desc2")]} Media={() => <FullVideo video={petanca} /> } links={Links}/>
      </section>
      <section id="whatbuilt">
        <h2 className='project-sectitle'>{t("whatbuilt-nav")}</h2>
        <ul>    
            <li>{t("petanca-what1")}</li>
            <li>{t("petanca-what2")}</li>
            <li>{t("petanca-what3")}</li>
        </ul>
      </section>
      <section id="objective">
        <h2 className='project-sectitle'>{t("objective-nav")}</h2>
        <p className="project-text">{t("petanca-objective")}</p>
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
        { id: 'whatbuilt', label: t("whatbuilt-nav") },
        { id: 'objective', label: t("objective-nav") },
      ]}
    >
      <section id="intro">
            <ProjectDesc title={t("asteroids-title")} desc={[t("asteroids-desc1"), t("asteroids-desc2")]} Media={() => <FullVideo video={asteroids} /> } links={Links}/>
      </section>
      <section id="whatbuilt">
        <h2 className='project-sectitle'>{t("whatbuilt-nav")}</h2>
        <ul>    
            <li>{t("asteroids-what1")}</li>
            <li>{t("asteroids-what2")}</li>
            <li>{t("asteroids-what3")}</li>
            <li>{t("asteroids-what4")}</li>
        </ul>
      </section>
      <section id="objective">
        <h2 className='project-sectitle'>{t("objective-nav")}</h2>
        <p className="project-text">{t("asteroids-objective")}</p>
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
        { id: 'whatbuilt', label: t("whatbuilt-nav") },
        { id: 'objective', label: t("objective-nav") },
      ]}
    >
      <section id="intro">
            <ProjectDesc title={t("volcano-title")} desc={[t("volcano-desc1")]} Media={() => <FullVideo video={volcan} /> } links={Links}/>
      </section>
      <section id="whatbuilt">
        <h2 className='project-sectitle'>{t("whatbuilt-nav")}</h2>
        <ul>    
            <li>{t("volcano-what1")}</li>
            <li>{t("volcano-what2")}</li>
            <li>{t("volcano-what3")}</li>
            <li>{t("volcano-what4")}</li>
            <li>{t("volcano-what5")}</li>
        </ul>
      </section>
      <section id="objective">
        <h2 className='project-sectitle'>{t("objective-nav")}</h2>
        <p className="project-text">{t("volcano-objective")}</p>
      </section>
    </ProjectLayout>
  )
} 

export function BathroomPage(){
  const Links: Link[] = [
          {link : "https://shadowlinkv5.itch.io/there-is-no-bathroom-in-this-dungeon", image : itchio, text: t("itchio-link") },
      ]
  return(
      <ProjectLayout
      sections={[
        { id: 'intro', label: t("intro-nav") },
        { id: 'mirol', label: t("myrole-nav") },
        { id: 'character', label: t("bathroom-character") },
        { id: 'enemyia', label: t("bathroom-enemyai") },
        { id: 'ui', label: t("bathroom-ui") },
        { id: 'level', label: t("bathroom-level") },
      ]}
    >
      <section id="intro">
        <ProjectDesc title={t("bathroom-title")} desc={[t("bathroom-intro1"),t("bathroom-intro2")]} Media={() => <YoutubeVideo id="u7VQM7oTTeQ" /> } links={Links}/>
      </section>
      <section id="mirol">
            <h2 className='project-sectitle'>{t("myrole-nav")}</h2>
            <p className="project-text">{t("bathroom-role")}</p>
            <ul>
                <li>{t("bathroom-role-en1")}</li>
                <li>{t("bathroom-role-en2")}</li>
                <li>{t("bathroom-role-en3")}</li>
                <li>{t("bathroom-role-en4")}</li>
                <li>{t("bathroom-role-en5")}</li>
                <li>{t("bathroom-role-en6")}</li>
            </ul>
      </section>
      <section id="character">
        <h2 className='project-sectitle'>{t("bathroom-character")}</h2>
        <HalfVideo video={charmovement} textleft={false} texts={[t("bathroom-char1"),t("bathroom-char2") ]}/>
      </section>
      <section id="enemyia">
        <h2 className='project-sectitle'>{t("bathroom-enemyai")}</h2>
        <HalfVideo video={enemyia} textleft={true} texts={[t("bathroom-ia1"),t("bathroom-ia2"),t("bathroom-ia3"), ]}/>
      </section>
      <section id="ui">
        <h2 className='project-sectitle'>{t("bathroom-ui")}</h2>
        <p className="project-text">{t("bathroom-ui1")}</p>
        <HalfImage image={inventory} textleft={false} texts={[ t("bathroom-ui2")]} desc={''}/>
        <HalfVideo video={mainmenu} textleft={true} texts={[t("bathroom-ui3") ]}/>
      </section>
      <section id="level">
        <h2 className='project-sectitle'>{t("bathroom-level")}</h2>
        <HalfImage image={pieces} textleft={false} texts={[ t("bathroom-lvl1"), t("bathroom-lvl2")]} desc={''}/>
        <FullImage image={throne} desc=''/>
        <FullImage image={bigroom} desc=''/>
        <FullImage image={flooded} desc=''/>
      </section>
      <section id="vfx">
        <h2 className='project-sectitle'>{t("bathroom-vfx")}</h2>
        <FullVideo video={shoot}/>
        <FullVideo video={ult}/>
      </section>
      

    </ProjectLayout>
  )
} 

export function MolePage(){
  const Links: Link[] = [
          {link : "http://hdl.handle.net/2183/39634", image : doc, text: t("doc-link") },
      ]
  return(
      <ProjectLayout
      sections={[
        { id: 'intro', label: t("intro-nav") },
        { id: 'whatbuilt', label: t("whatbuilt-nav") },
        { id: 'objective', label: t("objective-nav") },
      ]}
    >
      <section id="intro">
            <ProjectDesc title={t("mole-title")} desc={[t("mole-desc1"),t("mole-desc2"),t("mole-desc3")]} Media={() => <FullVideo video={molevideo} /> } links={Links}/>
      </section>
      <section id="whatbuilt">
        <h2 className='project-sectitle'>{t("whatbuilt-nav")}</h2>
        <ul>    
            <li>{t("mole-what1")}</li>
            <li>{t("mole-what2")}</li>
            <li>{t("mole-what3")}</li>
            <li>{t("mole-what4")}</li>
            <li>{t("mole-what5")}</li>
            <li>{t("mole-what6")}</li>
            <li>{t("mole-what7")}</li>
            <li>{t("mole-what8")}</li>
        </ul>
      </section>
      <section id="objective">
        <h2 className='project-sectitle'>{t("objective-nav")}</h2>
        <p className="project-text">{t("mole-objective")}</p>
      </section>
    </ProjectLayout>
  )
} 

export function PortfolioPage(){
  const Links: Link[] = [
      ]
  return(
      <ProjectLayout
      sections={[
        { id: 'intro', label: t("intro-nav") },
        { id: 'whatbuilt', label: t("whatbuilt-nav") },
        { id: 'objective', label: t("objective-nav") },
      ]}
    >
      <section id="intro">
            <ProjectDesc title={t("portfolio-title")} desc={[t("portfolio-desc1"), t("portfolio-desc2")]} Media={() => <FullImage image={portfolioimage} desc='' /> } links={Links}/>
      </section>
      <section id="whatbuilt">
        <h2 className='project-sectitle'>{t("whatbuilt-nav")}</h2>
        <ul>    
            <li>{t("portfolio-what1")}</li>
            <li>{t("portfolio-what2")}</li>
            <li>{t("portfolio-what3")}</li>
            <li>{t("portfolio-what4")}</li>
        </ul>
      </section>
      <section id="objective">
        <h2 className='project-sectitle'>{t("objective-nav")}</h2>
        <p className="project-text">{t("portfolio-objective")}</p>
        <p className="project-text">{t("portfolio-objetcive2")}</p>
      </section>
    </ProjectLayout>
  )
} 

export function MagesPage(){
  const Links: Link[] = [
      ]
  return(
      <ProjectLayout
      sections={[
        { id: 'intro', label: t("intro-nav") },
        { id: 'role', label: t("myrole-nav") },
        { id: 'objective', label: t("objective-nav") },
      ]}
    >
      <section id="intro">
            <ProjectDesc title={t("mages-title")} desc={[t("mages-desc1"), t("mages-desc2")]} Media={() => <FullImage image={portfolioimage} desc='' /> } links={Links}/>
      </section>
      <section id="role">
        <h2 className='project-sectitle'>{t("myrole-nav")}</h2>
        <ul>    
            <li>{t("portfolio-what1")}</li>
            <li>{t("portfolio-what2")}</li>
            <li>{t("portfolio-what3")}</li>
            <li>{t("portfolio-what4")}</li>
        </ul>
      </section>
      <section id="objective">
        <h2 className='project-sectitle'>{t("objective-nav")}</h2>
        <p className="project-text">{t("portfolio-objective")}</p>
        <p className="project-text">{t("portfolio-objetcive2")}</p>
      </section>
    </ProjectLayout>
  )
} 