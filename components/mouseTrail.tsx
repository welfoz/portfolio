import { MutableRefObject, useEffect, useRef } from "react"

export default function MouseTrail() {
    const mouseRef = useRef() as MutableRefObject<HTMLDivElement>;
    const mouseRef1 = useRef() as MutableRefObject<HTMLDivElement>;
    const mouseRef2 = useRef() as MutableRefObject<HTMLDivElement>;
    const mouseRef3 = useRef() as MutableRefObject<HTMLDivElement>;
    const mouseRef4 = useRef() as MutableRefObject<HTMLDivElement>;
    const mouseRef5 = useRef() as MutableRefObject<HTMLDivElement>;
    let top = "0px";
    let left = '0px';

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            // console.log(e)
           
            left = `${e.clientX.toString()}px`;
            top = `${e.clientY.toString()}px`;
            
            mouseRef.current.style.left = left;
            mouseRef.current.style.top = top;

            mouseRef1.current.style.left = left;
            mouseRef1.current.style.top = top;

            mouseRef2.current.style.left = left;
            mouseRef2.current.style.top = top;

            mouseRef3.current.style.left = left;
            mouseRef3.current.style.top = top;

            mouseRef4.current.style.left = left;
            mouseRef4.current.style.top = top;

            mouseRef5.current.style.left = left;
            mouseRef5.current.style.top = top;
        })
    }, []);

    return(
    <>
        <div ref={mouseRef} className="pointer bg-green-200 z-10"></div>
        <div ref={mouseRef2} className="pointer duration-100 ease-out bg-yellow-200 z-0"></div>
        <div ref={mouseRef1} className="pointer duration-300 ease-out bg-yellow-400 z-20"></div>
        <div ref={mouseRef3} className="pointer duration-500 ease-out bg-orange-500 z-20"></div>
        <div ref={mouseRef4} className="pointer duration-700 ease-out bg-orange-700 z-20"></div>
        <div ref={mouseRef5} className="pointer duration-1000 ease-out bg-red-500 z-20"></div>
    </>
    )
}
   