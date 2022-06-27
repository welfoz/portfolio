import TiltCard from "./TiltCard";
import upworkExtension from "../public/upwork extension.png"
import upworkHi from "../public/upwork cover letter.png"
import Image from "next/image";

export default function Project(props: any) {
    return(
        <>
          <div className={props.left}>
                {/* <div className="mb-10"> */}
                  {/* &#60;project&#62; */}
                {/* </div> */}
              {/* <TiltCard /> */}
          </div>
          
          <div className={props.right + " pers3d bg-purple-300"}>
            <div className="transZ-07 absolute h-fit w-fit img-extension-hi">
               <Image src={upworkHi} alt="upwork extension action" />
            </div>
            <div className="transZ-6 top-44 absolute h-1/5 w-2/3 bg-green-300">
               <Image src={upworkExtension} alt="upwork extension" />
            </div>
          </div>
        </>

    )
}