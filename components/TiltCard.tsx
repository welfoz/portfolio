import React, { MutableRefObject, useRef } from "react"

export default function TiltCard(props: {type: string, title: string, desc: string, skillsAndLinks: any, position: "left" | "right"}){
    const card = useRef() as MutableRefObject<HTMLDivElement>;

    const tiltRotation = 25;
    const perspective = 1000;
    const scale = 1;

    let offsetX = 0;


    function mouseOver(event: React.MouseEvent) {
        // console.log(card)

        // init var according to the position
        // for better performance => update offsetX only when the screen is resized
        if (props.position == "left") {
            offsetX = card.current.offsetLeft;
        } else if (props.position == "right") {
            // we assume we only have two container within the width of the screen
            // we add |---container1-----|--------------container2----|
            //        | width cont 1     | +  offsetLeft              |
            offsetX = card.current.offsetParent.previousSibling.offsetWidth + card.current.offsetLeft;
        }

        const centerX = offsetX +  card.current.offsetWidth/2;
        const centerY = card.current.offsetTop + card.current.offsetHeight/2;
        
        // clientX and clientY returns the coordonates 
        // of the mouse within the app viewport
        // we substract centers as we want our center 
        // in the center of the card element
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;

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
            <span className="type"> &#60;{props.type} /&#62;</span>
            <div ref={card} className="card" onMouseMove={mouseOver} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>
                    <span className="title">{props.title}</span>
                    <div className="text-black text-lg  w-full mt-3">
                        {props.desc}
                    </div>
                    {props.skillsAndLinks}
                    
            </div>
        </>
    )
}