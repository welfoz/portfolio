import gitub from "../public/githubWhiteIcon.png" 
import linkedin from "../public/linkedinIcon.png" 
import twitter from "../public/twitterIcon.png" 
import IconLink from "./link";
export default function RsBar() {
    return(
        <div className='fixed bottom-0 right-7 mix-blend-exclusion z-30'>
            <nav className="flex flex-col items-center space-y-1">
                <IconLink src={gitub} link="" />
                <IconLink src={linkedin} link="" />
                <IconLink src={twitter} link="" />

                <div className='border-solid border-white border-l-4 h-20'></div>
            </nav>
        </div>
    );
}

