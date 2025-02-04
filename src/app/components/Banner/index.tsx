"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';


const Banner = () => {

    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                                Guatemala <br /> conecta
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>Tiene como objetivo fortalecer la imagen y reputación internacional del país mediante una comunicación efectiva y estratégica. Se enfoca en la diplomacia digital, la transparencia institucional, la promoción cultural y la gestión de crisis. A través de redes sociales, contenido audiovisual, eventos culturales, programas de intercambio y la mejora de la comunicación interna, la campaña busca involucrar a la ciudadanía y la comunidad internacional, promoviendo una diplomacia pública eficaz y transparente que resalta los logros y valores de Guatemala en el escenario global.</p>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'><Link href='#cook-section'>Lets cook</Link></button>
                                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink'><Link href='#about-section'>Conoce más</Link></button>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-6 flex justify-center relative'>
                        <Image src="/images/Banner/mujer.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
