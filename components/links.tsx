import IconLink from "./link";
import gitub from "../public/githubIcon.png" 

export default function Links(props: {links: any}) {
    return(
        <div className="w-full flex justify-end items-start">
                {/* <IconLink src={gitub} link="" /> */}

                {props.links}
{/* 
             <div className="mr-2">
                <IconLink src={gitub} link="" />
             </div>
             
             <div className="mr-2">
                <IconLink src={gitub} link="" />
             </div>
              */}
        </div>
    )
}