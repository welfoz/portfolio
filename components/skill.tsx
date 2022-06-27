export default function Skill(props: any) {
    return(
        <div className="bg-blue-900 mr-4 rounded-md p-1.5 shadow-gray-800 shadow-sm">
                    <p className="text-sm text-white whitespace-nowrap">
                        {props.children}    
                    </p> 
        </div>
    )
}