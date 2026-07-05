import { Dot, TrendingUp, Video } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="w-full bg-light-blue/50">
            <div className='md:max-w-7xl mx-auto md:py-20 py-5 flex md:flex-row flex-col gap-4'>
                <div className="md:w-[50%] w-full md:space-y-4 space-y-2 md:px-0 px-4">
                    <div className="flex items-center gap-1 text-[10px]  tracking-wider font-semibold text-secondaryColor p-1 bg-light-blue w-fit rounded-full border border-neutral-300 px-2">
                        <Dot size={20} />
                        <p className='uppercase'>Enrolling for {new Date().getFullYear() + 1}</p>
                    </div>
                    <h1 className='md:text-5xl text-3xl font-semibold md:leading-17 leading-10 tracking-wide'>Elevating Education <br /> Through <span className='text-primaryColor'>Strategic <br /> Learning</span></h1>
                    <p className='md:text-base text-sm text-secondaryFontColor leading-relaxed'>
                        Experience a modern approach to academic excellence. Our data-driven methodologies and expert mentorship empower students to unlock their full potential and master complex subjects with confidence.
                    </p>
                    <div className="md:space-x-6 space-x-2 flex items-center">
                        <Button className='bg-primaryColor hover:bg-primaryColor/90 cursor-pointer text-white'>Explore Programs</Button>
                        <Button variant='outline' className='cursor-pointer text-primaryFontColor'><Video />Video Tutorials</Button>
                    </div>
                </div>
                <div className="md:w-[50%] w-full space-y-4 bg-white p-2 rounded-3xl border border-gray-100 shadow-2xl relative">
                    <Image
                        src="/img/hero.jpg"
                        alt="hero"
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover rounded-xl'
                        priority
                    />
                    <div className="absolute md:-bottom-6 md:-left-10 bottom-3 left-3 flex gap-3 items-center bg-white w-40 p-1 rounded-xl border border-gray-200 shadow-2xl">
                        <Button size="icon" className='rounded-full bg-secondaryColor hover:bg-secondaryColor text-white'>
                            <TrendingUp className="h-4 w-4" />
                        </Button>
                        <div className="">
                            <h3 className='text-sm text-primaryFontColor font-semibold'>98%</h3>
                            <p className='text-xs text-secondaryFontColor'>Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero