export default function Skill(props: any) {
    return(
        <div className="bg-blue-900 rounded-md p-1.5 ml-4 shadow-gray-800 shadow shadow-sm">
                    <p className="text-sm text-white">
                        {props.children}    
                    </p> 
        </div>
    )
}