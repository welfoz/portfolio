/* eslint-disable react/react-in-jsx-scope */
import nodeTest from 'node:test';
import {useRef, useEffect, useState, MutableRefObject, Ref} from 'react';

export default function VerticalNavBar() {
    
    // refs
    const welcome = useRef() as MutableRefObject<HTMLDivElement>;
    const extension = useRef() as MutableRefObject<HTMLDivElement>;
    const site = useRef() as MutableRefObject<HTMLDivElement>;
    const nocode = useRef() as MutableRefObject<HTMLDivElement>;
    const about = useRef() as MutableRefObject<HTMLDivElement>;

    // to track which span is active
    // as we just want 1 span active, never more
    // const [currentActive, setCurrentActive] = useState(welcome);
    let currentActive: MutableRefObject<HTMLElement> = welcome;
    
    // we do NOT use useStates as it rerender the component at every changes
    let screenH: number = -1
    const SCROLL_PADDING = 0;
    

    function changeActiveScroll(scrollTop: number) {
        screenH = window.innerHeight;
        // console.log(scrollTop);

        if (scrollTop && screenH != -1) {
              if ((scrollTop + SCROLL_PADDING) > (8*screenH - 10)) {
                console.log("about");
                if (currentActive != about) {
                    about.current.setAttribute("id", "active");
                    currentActive.current.removeAttribute("id");
                    currentActive = about;
                }

              } else if ((scrollTop + SCROLL_PADDING) > (7*screenH - 10)) {
                console.log("nocode");
                if (currentActive != nocode) {
                    nocode.current.setAttribute("id", "active");
                    currentActive.current.removeAttribute("id");
                    currentActive = nocode;
                }

              } else if ((scrollTop + SCROLL_PADDING) > (4*screenH - 10)) {
                console.log("site");
                if (currentActive != site) {
                    site.current.setAttribute("id", "active");
                    currentActive.current.removeAttribute("id");
                    currentActive = site;
                }   
            
              } else if ((scrollTop + SCROLL_PADDING) > (screenH - 10)) {
                console.log("extension");
                if (currentActive != extension) {
                    extension.current.setAttribute("id", "active");
                    currentActive.current.removeAttribute("id");
                    currentActive = extension;
                }

              } else {
                console.log("welcome");
                    
                if (currentActive != welcome) {
                    welcome.current.setAttribute("id", "active");
                    currentActive.current.removeAttribute("id");
                    currentActive = welcome;
                }
              }
          }
    }
    function changeActiveOnClick(clickedRef: MutableRefObject<HTMLDivElement>) {
        currentActive.current.removeAttribute("id");
        clickedRef.current.setAttribute("id", "active");
        currentActive = clickedRef;
    }

    useEffect(() => {
        document.getElementById("main")?.addEventListener("scroll", (e: Event) => {
            console.log(e);
            console.log(e.currentTarget?.scrollTop);
            changeActiveScroll(e.currentTarget?.scrollTop);
        })
    })
    
    return(
        <div className="fixed top-1/2 mix-blend-exclusion z-30 left-4">
            <ul id='dotList'>
                <li>
                    <a href="#welcome" className='group' onClick={() => {changeActiveOnClick(welcome)}}>
                        <span ref={welcome} className="navBarCircle" id='active'></span>
                        <span className='navBarToolTip'>Welcome</span>
                    </a>
                </li>
                <li>
                    <a href="#extension" className='group' onClick={() => {changeActiveOnClick(extension)}}>
                        <span ref={extension} className="navBarCircle"></span>
                        <span className='navBarToolTip'>Extension</span>
                    </a>
                </li>
                <li>
                    <a href="#site" className='group' onClick={() => {changeActiveOnClick(site)}}>
                        <span ref={site} className="navBarCircle"></span>
                        <span className='navBarToolTip'>site</span>
                    </a>
                </li>
                <li>
                    <a href="#nocode" className='group' onClick={() => {changeActiveOnClick(nocode)}}>
                        <span ref={nocode} className="navBarCircle"></span>
                        <span className='navBarToolTip'>No code</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className='group' onClick={() => {changeActiveOnClick(about)}}>
                        <span ref={about} className="navBarCircle"></span>
                        <span className='navBarToolTip'>About Me</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}