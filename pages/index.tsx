import type { NextPage } from 'next'
import Title from '../components/homescreenTitle'
import RsBar from '../components/rsBar'
import React, {MutableRefObject, UIEventHandler, useEffect, useRef, useState } from 'react'
import VerticalNavBar from '../components/navBarVertical'
import Footer from '../components/footer'
import Project from '../components/splitScreenProjects'
import HeadComp from '../components/head'
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
            <Project 
              left="Sticky"
              right="Scroll"
              />
        </section>

        <section id="site" className='bg-slate-100 bg-blend-exclusion text-red-600 text-4xl'>
            <Project
              left='Scroll'
              right='Sticky'
              />
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