import type { NextPage } from 'next'
import Title from '../components/homescreenTitle'
import RsBar from '../components/rsBar'
import React, {UIEventHandler, useEffect, useRef } from 'react'
import VerticalNavBar from '../components/navBarVertical'
import Footer from '../components/footer'
import Project from '../components/splitScreenProjects'
import HeadComp from '../components/head'
const Home: NextPage = () => {
  const main = useRef(null);

  const SCROLL_PADDING = 0;
  let screenH: number = -1;

  useEffect(() => {
    screenH = window.innerHeight;
  })
  // we use useEffect to add eventListener to the DOM
  // in dev mode, useEffect is called 2 times => some issues 
  // in prod mode, he has to be called 1 time
  // useEffect(() => {
  //   console.log(main.current);
  //   console.log("useEffect Index init");
  //   const screenH = window.innerHeight;
  //   const SCROLL_PADDING = 0;

  //   // main.current.addEventListener("scroll", (e) => {
  //   document.getElementById("main")?.addEventListener('scroll', (e) => {
  //     const scrollTop =  document.getElementById("main")?.scrollTop;
  //     if (scrollTop) {
  //       if ((scrollTop + SCROLL_PADDING) > (2*screenH - 1)) {
  //         console.log("en bas");
  //         const currentSpan =  document.querySelector("a[href='#about']")?.children[0];
  //         changeId(currentSpan, "about")

  //       } else if ((scrollTop + SCROLL_PADDING) > (screenH - 1)) {
  //         console.log("middle");
  //         const currentSpan =  document.querySelector("a[href='#projects']")?.children[0];
  //         changeId(currentSpan, "projects")

  //       } else {
  //         console.log("begin");
  //         const currentSpan =  document.querySelector("a[href='#welcome']")?.children[0];
  //         changeId(currentSpan, "welcome");
  //       }
  //     }
  //  }, {passive: true});
  // }, [])
  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    console.log(event);
    if (screenH == -1) {
      throw new Error("screenHeight = -1");
    }
    const scrollTop = event.currentTarget.scrollTop;
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
  }


  return (
      <>
        <HeadComp />
        <VerticalNavBar />      
        <RsBar/>
        
      <main id='main' ref={main} onScroll={handleScroll}>
        <section id="welcome" className='classicSection'>
          <Title/>
        </section>
        
        <section id="extension" className='bg-slate-100 bg-blend-exclusion text-red-600 text-4xl'>
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

        <section id="nocode" className='bg-green-100 bg-blend-exclusion text-red-600 text-4xl classicSection'>
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


function changeId(currentSpan: any, path: string) {
    if (currentSpan && currentSpan.id != "active") {
            console.log("change id")
            document.getElementById("active")?.removeAttribute("id");
            currentSpan.setAttribute("id", "active");
            // if we want to update the url
            // window.location.hash = path;
    }
}