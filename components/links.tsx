import IconLink from "./link";
import gitub from "../public/githubIcon.png" 

export default function Links() {
    return(
        <div className="w-full flex justify-end items-start">
             <div className="mr-2">
                <IconLink src={gitub} link="" />
             </div>

             <div className="mr-2">
                <IconLink src={gitub} link="" />
             </div>
             
             <div className="mr-2">
                <IconLink src={gitub} link="" />
             </div>
             
        </div>
    )
}