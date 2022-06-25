import Links from "./links"
import Skill from "./skill"

export default function Skills() {
    return(
            <div className="fixed w-10/12 bottom-0 h-1/5 flex items-start transkill ml-2">
                <Skill>
                    javascript    
                </Skill> 
                <Skill>
                    html    
                </Skill> 

                <Skill>
                    css    
                </Skill> 
                <Links />
            </div>

    )
}