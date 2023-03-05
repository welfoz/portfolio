import type { NextPage } from 'next'
import Title from '../components/homescreenTitle'
import RsBar from '../components/rsBar'
import React from 'react'
import VerticalNavBar from '../components/navBarVertical'
import Footer from '../components/footer'
import HeadComp from '../components/head'
import TiltCard from '../components/TiltCard'
import Skill from '../components/skill'
import IconLink from '../components/link'
import github from "../public/githubIcon.png" 
import Image from 'next/image'
import upworkHi from "../public/upwork cover letter.png"
import upworkExtension from "../public/upwork extension.png"
import MouseTrail from '../components/mouseTrail'
const Home: NextPage = () => {
  return (
      <>
        <HeadComp />
        <VerticalNavBar />      
        <RsBar/>
        
      <main id='main'>
        <MouseTrail />
        <section id="welcome" className='classicSection z-50'>
          <Title/>
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

export default Home