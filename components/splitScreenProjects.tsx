export default function Project(props: {left: string, right: string}) {
    return(
        <>
          <div className={props.left}>
                &#60;project&#62;
            <div className="card"></div>
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