import React, { useRef } from "react"
import Skills from "./skills";

export default function TiltCard(){
    const card = useRef(null);

    const tiltRotation = 25;
    const perspective = 1000;
    const scale = 1;
    function mouseOver(event: React.MouseEvent) {
        // console.log(card);

        const centerX = card.current.offsetLeft + card.current.offsetWidth/2;
        const centerY = card.current.offsetTop + card.current.offsetHeight/2;
        // console.log(centerX, centerY);
        
        // clientX and clientY returns the coordonates 
        // of the mouse within the app viewport
        // we substract centers as we want our center 
        // in the center of the card element
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        console.log(mouseX, mouseY);

        const rotateX = (tiltRotation*(mouseY/(card.current.offsetHeight))).toFixed(2);
        const rotateY = -(tiltRotation*(mouseX/(card.current.offsetWidth))).toFixed(2);

        card.current.style.transform = `perspective(${perspective}px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function mouseLeave() {
        card.current.style.transform = `perspective(${perspective}px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)`;
        setTransition();
    }

    function mouseEnter() {
        setTransition();
    }

    function setTransition() {
        clearTimeout(card.current.transitionTimeoutId);
        card.current.style.transition = "transform 2500ms cubic-bezier(0.03, 0.98, 0.52, 0.99)";
        card.current.transitionTimeoutId = setTimeout(() => {
            card.current.style.transition = '';
        }, 2500)
    }


    return(
        <>
            <span className="type"> &#60;EXTENSION WEB /&#62;</span>
            <div ref={card} className="card" onMouseMove={mouseOver} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>
                    <span className="title">Upwork Cover Letter Autofiller</span>
                    <div className="text-black text-lg  w-full mt-3">
                        une brève des de ce que ca eanie ajo ad dao dakodz aok dzako dzaokzj idazjo dazjo dajzi iazjd izajdizajd iazjd aojdazidj aizdjiazdjiaz   
                    </div>
                    <Skills />           
            </div>
        </>
    )
}