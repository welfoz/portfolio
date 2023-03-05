import type { NextPage } from 'next'
import React from 'react'
import VerticalNavBar from '../components/NavBarVertical'
import Footer from '../components/Footer'
import HeadComp from '../components/Head'
import TiltCard from '../components/TiltCard'
import MouseTrail from '../components/MouseTrail'
import Image, { StaticImageData } from 'next/image'

import upworkHi from "../public/upwork cover letter.png"
import upworkExtension from "../public/upwork extension.png"

import github from "../public/githubIcon.png" 
import gitub from "../public/githubWhiteIcon.png" 
import linkedin from "../public/linkedinIcon.png" 
import twitter from "../public/twitterIcon.png" 
const Home: NextPage = () => {
  return (
      <>
        <HeadComp />
        <VerticalNavBar />      
        <RsBar/>
        
      <main id='main'>

        <section id="welcome" className='classicSection z-50 bg-black'>
          <MouseTrail />
          <FirstScreen />
        </section>

        <section id="extension" className='bg-blend-exclusion text-red-600 text-4xl pers3d z-30'>
              <div className="Sticky bg-fuchsia-600">
                  <TiltCard position="left" type="EXTENSION WEB" title="Upwork Cover Letter Extension" desc="aaaaaaa a aaaa a aaaaaaa lo azd za dazdjazokid iadojaz idjaz idoaj" 
                    skillsAndLinks={ 
                        <div className="fixed w-10/12 bottom-0 h-1/5 flex items-start transkill ml-2">
                            <Skill>
                              Javascript
                            </Skill>
                            <Skill>
                              Vim
                            </Skill>

                            <div className='w-full flex justify-end items-start'>
                              <IconLink src={github} link="" />
                              <IconLink src={github} link="" />
                              <IconLink src={github} link="" />
                            </div>

                        </div>
                      }
                    />
              </div>

             <div className="Scroll pers3d">
                <div className="transZ-07 absolute h-fit w-fit img-extension-hi border-r-8 rounded-xl bg-green-500">
                  <Image src={upworkHi} alt="upwork extension action" />
                </div>
                <div className="transZ-6 top-44 absolute h-1/6 w-1/2 rounded-3xl ">
                  <Image src={upworkExtension} alt="upwork extension" />
                </div>
                <div className="transZ-back1 bg-blue-400">
                  dad
                </div>
                <div className='transZ-triangle1'>
                    <div className='triangle top-44'></div>
                    <div className='triangle top-7'></div>
                    <div className='triangle top-14'></div>
                    <div className='triangle top-60'></div>

                </div>
             </div>
        </section>

        <section id="site" className='bg-blend-exclusion text-red-600 text-4xl pers3d z-20'>
             <div className="Scroll pers3d">
                 
                <div className="transZ-07-left absolute h-fit w-fit img-extension-hi">
                  <Image src={upworkHi} alt="upwork extension action" />
                </div>
                <div className="transZ-6-left top-44 absolute h-1/5 w-2/3 bg-green-300">
                  <Image src={upworkExtension} alt="upwork extension" />
                </div>
                {/* <div className="transZ-back2 bg-red-400">
                  dad
                </div> */}
             </div>


              <div className="Sticky bg-green-400">
                  <TiltCard position="right" type="MOBILE APP" title="School Reward" desc="aaaaaaa a aaaa a aaaaaaa lo azd za dazdjazokid iadojaz idjaz idoaj" 
                    skillsAndLinks={ 
                        <div className="fixed w-10/12 bottom-0 h-1/5 flex items-start transkill ml-2">
                            <Skill>
                              No Code
                            </Skill>
                            <Skill>
                              AppGyver
                            </Skill>

                            <Skill>
                                Firebase
                            </Skill>
                            <div className='w-full flex justify-end items-start'>
                              <IconLink src={github} link="" />
                              <IconLink src={github} link="" />
                              <IconLink src={github} link="" />
                            </div>

                        </div>
                      }
                    />
              </div>
        </section>

        <section id="nocode" className='bg-blend-exclusion text-red-600 text-4xl pers3d z-30'>
              <div className="Sticky bg-yellow-400">
                  <TiltCard position="left" type="EXTENSION WEB 02" title="Upwork Cover Letter Extension" desc="aaaaaaa a aaaa a aaaaaaa lo azd za dazdjazokid iadojaz idjaz idoaj" 
                    skillsAndLinks={ 
                        <div className="fixed w-10/12 bottom-0 h-1/5 flex items-start transkill ml-2">
                            <Skill>
                              Javascript
                            </Skill>
                            <Skill>
                              Vim
                            </Skill>

                            <div className='w-full flex justify-end items-start'>
                              <IconLink src={github} link="" />
                              <IconLink src={github} link="" />
                              <IconLink src={github} link="" />
                            </div>

                        </div>
                      }
                    />
              </div>

             <div className="Scroll pers3d">
                <div className="transZ-07 absolute h-fit w-fit img-extension-hi">
                  <Image src={upworkHi} alt="upwork extension action" />
                </div>
                <div className="transZ-6 top-44 absolute h-1/5 w-2/3 bg-green-300">
                  <Image src={upworkExtension} alt="upwork extension" />
                </div>
                <div className="transZ-back3 bg-red-800">
                  dad
                </div>
             </div>
        </section>


        <section id="about" className='classicSection z-50'>
            <button className='bg-Orange'>Button</button>
            <button className='bg-Green'>Button</button>
            <Footer class="MediumEmphasis" />
        </section>
      </main>
      </>
  )
}

const FirstScreen = () => {
  return (
        <div className="flex flex-col items-center justify-center h-screen">

            <div>
            <p className="text-Orange text-xl font-semibold">
            Salut👋!
            </p>
            <div className='text-4xl mt-2 inline-flex'>
                je suis <div className="pl-3 font-semibold">Fabien MICHEL</div>
            </div>
            <p className="">
            Créateur de projets & futur Software Engineer
            </p>
        </div>
        </div>
  )
}

const RsBar = () => {
  return (
        <div className='fixed bottom-0 right-7 mix-blend-exclusion z-30'>
            <nav className="flex flex-col items-center space-y-1">
                <IconLink src={gitub} link="" />
                <IconLink src={linkedin} link="" />
                <IconLink src={twitter} link="" />

                <div className='border-solid border-white border-l-4 h-20'></div>
            </nav>
        </div>
  )
}

const Skill = (props: any) => {
  return (
        <div className="bg-blue-900 mr-4 rounded-md p-1.5 shadow-gray-800 shadow-sm">
                    <p className="text-sm text-white whitespace-nowrap">
                        {props.children}    
                    </p> 
        </div>
  )
}

const IconLink = (props: {src : StaticImageData, link: string}) => {
    return(
        <div className='hover:scale-110 hover:-translate-y-1 transition duration-100 w-fit mr-2'>
            <a href={props.link}>
                <div className='w-8 h-8 relative'>
                <Image layout='fill' objectFit='contain' src={props.src} alt='socialIcon' objectPosition="50% 0%"/>
                </div>
            </a>
        </div>
    );
}

export default Home