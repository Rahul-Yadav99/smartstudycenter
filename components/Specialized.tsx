import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Book, BookOpenText, Brain } from 'lucide-react'

const Specialized = () => {
    return (
        <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4'>
            <h1 className='text-center md:text-4xl text-2xl font-semibold text-primaryFontColor mb-4'>Our Specialized Programs</h1>
            <p className='max-w-3xl mx-auto text-center md:text-base text-sm text-secondaryFontColor leading-relaxed'>Tailored educational pathways designed to bridge knowledge gaps and foster deep understanding across core academic disciplines.</p>
            <div className="md:mt-16 mt-8  md:space-y-8 space-y-4">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="md:h-96 h-64 w-full md:col-span-2 rounded-2xl">
                        <Image
                            src="/img/hero1.jpg"
                            alt="specialized"
                            width={1000}
                            height={1000}
                            className='w-full h-full object-cover rounded-2xl'
                            priority
                        />
                    </div>
                    <div className="md:h-96 h-64 w-full border border-neutral-300 rounded-2xl p-4 flex flex-col justify-between">
                        <div className="space-y-3">
                            <Button size='icon' className='bg-primaryColor hover:bg-primaryColor/90 text-white cursor-pointer h-10 w-10'><BookOpenText /></Button>
                            <h2 className='text-xl font-semibold text-primaryFontColor'>Humanities & Arts</h2>
                            <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed'>Developing critical thinking and analytical writing skills for aspiring scholars.</p>
                        </div>
                        <Button variant='link' className='hover:cursor-pointer text-primaryColor pl-0 w-fit'>
                            Learn More
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="md:h-96 h-64 w-full border border-neutral-300 rounded-2xl p-4 flex flex-col justify-between">
                        <div className="space-y-3">
                            <Button size='icon' className='bg-secondaryColor hover:bg-secondaryColor/90 text-white cursor-pointer h-10 w-10'><Brain /></Button>
                            <h2 className='text-xl font-semibold text-primaryFontColor'>Test Preparation</h2>
                            <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed'>Strategized coaching for SAT, ACT, and GRE with proven score-improvement records.</p>
                        </div>
                        <Button variant='link' className='hover:cursor-pointer text-primaryColor pl-0 w-fit'>
                            Learn More
                            <ArrowRight />
                        </Button>
                    </div>
                    <div className="md:h-96 h-94 w-full md:col-span-2 flex md:flex-row flex-col items-center justify-center gap-4 border border-neutral-300 rounded-2xl p-4">
                        <Image
                            src="/img/hero2.jpg"
                            alt="specialized"
                            width={1000}
                            height={1000}
                            className='md:w-64 h-44 object-cover rounded-2xl'
                            priority
                        />
                        <div className="space-y-4">
                            <h2 className='text-xl font-semibold text-primaryFontColor'>Personalized Mentorship</h2>
                            <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed'>One-on-one sessions with industry experts and PhD holders to guide your academic journey.</p>
                            <Button variant='link' className='hover:cursor-pointer text-primaryColor pl-0 w-fit'>
                                Book a Consultation
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialized