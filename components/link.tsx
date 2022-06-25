import Image, { StaticImageData } from 'next/image'

export default function IconLink(props: {src : StaticImageData, link: string}) {
    return(
        <div className='hover:scale-110 hover:-translate-y-1 transition duration-100 w-fit'>
            <a href={props.link}>
                <Image src={props.src} height="35" width="35" alt='socialIcon'/>
            </a>
        </div>
    );
}