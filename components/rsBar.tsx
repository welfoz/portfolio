import Image from 'next/image'
import gitub from "../public/githubWhiteIcon.png" 
import linkedin from "../public/linkedinIcon.png" 
import twitter from "../public/twitterIcon.png" 
export default function RsBar() {
    return(
        <div className='fixed bottom-0 right-7 mix-blend-exclusion z-30'>
            <nav className="flex flex-col items-center space-y-1">
                <Icon link={gitub}/>
                <Icon link={linkedin}/>
                <Icon link={twitter}/>

                <div className='border-solid border-white border-l-4 h-20'></div>
            </nav>
        </div>
    );
}

function Icon({link} : any) {
    return(
        <div className='hover:scale-110 hover:-translate-y-1 transition duration-100'>
        <Image src={link} height="40" width="40" alt='socialIcon'/>
        </div>
    );
}