import TiltCard from "./card";

export default function Project(props: {left: string, right: string}) {
    return(
        <>
          <div className={props.left}>
                &#60;project&#62;
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