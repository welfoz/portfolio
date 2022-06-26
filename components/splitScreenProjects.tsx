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
            <div className="detail transZ10 absolute inset-0">    
               Detail .... 
            </div>
              <div className="card transZ6 absolute inset-0"></div>

            <div className="detail">
              Detail .... 
              <div className="card"></div>
            </div>

            <div className="detail">
              Detail .... 
              <div className="card"></div>
            </div>

          </div>
        </>

    )
}