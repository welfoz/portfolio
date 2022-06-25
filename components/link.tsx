import Image, { StaticImageData } from 'next/image'

export default function IconLink(props: {src : StaticImageData, link: string}) {
    return(
        <div className='hover:scale-110 hover:-translate-y-1 transition duration-100 w-fit'>
            <a href={props.link}>
                <div className='w-8 h-8 relative'>
                <Image layout='fill' objectFit='contain' src={props.src} alt='socialIcon' objectPosition="50% 0%"/>
                </div>
            </a>
        </div>
    );
}