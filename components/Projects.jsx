import React from 'react'
import Spotify from '../public/assets/projects/1.png'
import Foodya from '../public/assets/projects/2.png'
import HungryBeast from '../public/assets/projects/3.png'
import Jeopardy from '../public/assets/projects/4.png'
import BankistApp from '../public/assets/projects/5.png'
import BankistSite from '../public/assets/projects/6.png'
import RockPaperScissor from '../public/assets/projects/7.png'
import RollTheDice from '../public/assets/projects/8.png'
import GuessMyNumber from '../public/assets/projects/9.png'
import Kudos from '../public/assets/projects/10.png'
import Whoosh from '../public/assets/projects/11.png'

import ProjectItem from './ProjectItem'

const Projects = () => (
  <div id="projects" className="w-full p-2">
    <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
      <h2 className="py-4">What I&apos;ve Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Spotify Clone"
          backgroundImg={Spotify}
          projectUrl="/spotify"
        />
        <ProjectItem
          title="Foodya"
          backgroundImg={Foodya}
          projectUrl="/foodya"
        />
        <ProjectItem
          title="Foodya"
          backgroundImg={Whoosh}
          projectUrl="/whoosh"
        />
        <ProjectItem
          title="Kudos"
          backgroundImg={Kudos}
          projectUrl="/kudos"
        />
        <ProjectItem
          title="Hungry Beast"
          backgroundImg={HungryBeast}
          projectUrl="/hungrybeast"
        />
        <ProjectItem
          title="Jeopardy"
          backgroundImg={Jeopardy}
          projectUrl="/jeopardy"
        />
        <ProjectItem
          title="Bankist App"
          backgroundImg={BankistApp}
          projectUrl="/bankistapp"
        />
        <ProjectItem
          title="Bankist Site"
          backgroundImg={BankistSite}
          projectUrl="/bankistsite"
        />
        <ProjectItem
          title="Rock Paper Scissor"
          backgroundImg={RockPaperScissor}
          projectUrl="/rockpaperscissor"
        />
        <ProjectItem
          title="Roll The Dice"
          backgroundImg={RollTheDice}
          projectUrl="/rollthedice"
        />
        <ProjectItem
          title="Guess My Number"
          backgroundImg={GuessMyNumber}
          projectUrl="/number"
        />
      </div>
    </div>
  </div>
)

export default Projects
