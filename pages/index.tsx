import type { NextPage } from 'next'
import Title from '../components/homescreenTitle'
import RsBar from '../components/rsBar'
import React, {MutableRefObject, UIEventHandler, useEffect, useRef, useState } from 'react'
import VerticalNavBar from '../components/navBarVertical'
import Footer from '../components/footer'
import Project from '../components/splitScreenProjects'
import HeadComp from '../components/head'
import TiltCard from '../components/TiltCard'
import Skills from '../components/skills'
import Skill from '../components/skill'
import Links from '../components/links'
import IconLink from '../components/link'
import github from "../public/githubIcon.png" 
import Image from 'next/image'
import upworkHi from "../public/upwork cover letter.png"
import upworkExtension from "../public/upwork extension.png"
const Home: NextPage = () => {
  return (
      <>
        <HeadComp />
        <VerticalNavBar />      
        <RsBar/>
        
      <main id='main'>
        <section id="welcome" className='classicSection'>
          <Title/>
        </section>
        
        <section id="extension" className='bg-slate-100 bg-blend-exclusion text-red-600 text-4xl pers3d'>
              <div className="Sticky">
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

             <div className="Scroll pers3d bg-purple-300">
                <div className="transZ-07 absolute h-fit w-fit img-extension-hi">
                  <Image src={upworkHi} alt="upwork extension action" />
                </div>
                <div className="transZ-6 top-44 absolute h-1/5 w-2/3 bg-green-300">
                  <Image src={upworkExtension} alt="upwork extension" />
                </div>
             </div>
        </section>

        <section id="site" className='bg-slate-100 bg-blend-exclusion text-red-600 text-4xl pers3d'>


             <div className="Scroll pers3d bg-purple-300">
                <div className="transZ-07-left absolute h-fit w-fit img-extension-hi">
                  <Image src={upworkHi} alt="upwork extension action" />
                </div>
                <div className="transZ-6-left top-44 absolute h-1/5 w-2/3 bg-green-300">
                  <Image src={upworkExtension} alt="upwork extension" />
                </div>
             </div>


              <div className="Sticky">
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

        <section id="nocode" className='bg-green-100 bg-blend-exclusion text-red-600 text-4xl classicSection pers3d'>
            <div className="parallax_layer">
              No code
            </div>
        </section>

        <section id="about" className='classicSection'>
            <button className='bg-Orange'>Button</button>
            <button className='bg-Green'>Button</button>
            <Footer class="MediumEmphasis" />
        </section>
      </main>
      </>
  )
}

export default Home