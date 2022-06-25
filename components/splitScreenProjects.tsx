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
          <div className={props.right}>
            <div className="detail">    
               Detail .... 
              <div className="card"></div>
            </div>

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