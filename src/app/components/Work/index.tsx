"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";


interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
    link: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/images/Features/Objetivo1.png',
        heading: "Fortalecer la imagen y reputación internacional de Guatemala",
        subheading: "",
        link: 'Ver más'
    },
    {
        imgSrc: '/images/Features/Objetivo2.png',
        heading: "Mejorar la comunnicación interna y externa del MINEX",
        subheading: "",
        link: 'Ver más'
    },
    {
        imgSrc: '/images/Features/Objetivo3.png',
        heading: "Promover la diplomacia publica, eficaz y transparente",
        subheading: "",
        link: 'Ver más'
    },
    {
        imgSrc: '/images/Features/Objetivo4.png',
        heading: "Impulsar la participación ciudadana y el dialogo intercultural",
        subheading: "",
        link: 'Ver más'
    }

]

const Work = () => {
    return (


        <div>
            <div className='mx-auto max-w-7xl py-40 px-6' id="about-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Objetivos</p>
                    </Fade>
                </div>


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <div className='work-img-bg rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]'style={{ marginLeft: '50px' }}>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={200} height={150} />
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                                <div className='flex items-center justify-center'>
                                    <Link href='/'><p className='text-center text-lg font-medium text-pink mt-2 hover-underline'>{items.link}<ChevronRightIcon width={20} height={20} /></p></Link>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Work;
