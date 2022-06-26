import TiltCard from "./TiltCard";

export default function Project(props: {left: string, right: string}) {
    return(
        <>
          <div className={props.left}>
                {/* <div className="mb-10"> */}
                  {/* &#60;project&#62; */}
                {/* </div> */}
              <TiltCard />
          </div>
          <div className={props.right + " pers3d"}>
            <div className="transZ2 absolute top-48 right-16 h-1/5 w-2/3 bg-green-300">    
              2
            </div>
            <div className="transZ6 absolute top-96 left-0 h-1/3 w-2/3 bg-yellow-300 mt-10">
                6
            </div>
          <div className="transZ-4 absolute bottom-32 right-44 h-1/3 w-2/3 bg-cyan-300 mt-10">
                6
            </div>
           </div>
        </>

    )
}