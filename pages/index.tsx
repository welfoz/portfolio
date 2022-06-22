import type { NextPage } from 'next'
import Head from 'next/head'
import Title from '../components/homescreenTitle'
import RsBar from '../components/rsBar'
import React, { useState, useEffect } from 'react'
import VerticalNavBar from '../components/navBarVertical'
const Home: NextPage = () => {

  // we use useEffect to add eventListener to the DOM
  // in dev mode, useEffect is called 2 times => some issues 
  // in prod mode, he has to be called 1 time
  useEffect(() => {
    console.log("useEffect Index init");
    const screenH = window.innerHeight;
    const SCROLL_PADDING = 0;

    document.getElementById("main")?.addEventListener('scroll', (e) => {
      const scrollTop =  document.getElementsByTagName("main")[0]?.scrollTop;
      if (scrollTop) {
        if ((scrollTop + SCROLL_PADDING) > (2*screenH - 1)) {
          console.log("en bas");
          const currentSpan =  document.querySelector("a[href='#about']")?.children[0];
          changeId(currentSpan, "about")

        } else if ((scrollTop + SCROLL_PADDING) > (screenH - 1)) {
          console.log("middle");
          const currentSpan =  document.querySelector("a[href='#projects']")?.children[0];
          changeId(currentSpan, "projects")

        } else {
          console.log("begin");
          const currentSpan =  document.querySelector("a[href='#welcome']")?.children[0];
          changeId(currentSpan, "welcome");
        }
      }
   }, {passive: true})
  })

  return (
      <main> 
        <Head>
          <title>Fabien's Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <VerticalNavBar />      
        <RsBar/>
        
        <section id="welcome">
          <Title/>
        </section>
        
        <section id="projects" className='bg-slate-50 bg-blend-exclusion'>
        
        </section>

        <section id="about">
          <button className='bg-Orange'>Button</button>
          <button className='bg-Green'>Button</button>
          <footer className='MediumEmphasis'>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
            </a>
          </footer>

        </section>
      </main>
  )
}

export default Home

function changeId(currentSpan: any, path: string) {
    if (currentSpan && currentSpan.id != "active") {
            console.log("change id")
            document.getElementById("active")?.removeAttribute("id");
            currentSpan.setAttribute("id", "active");
            // if we want to update the url
            // window.location.hash = path;
    }
}