import React from 'react'
import { ChartNoAxesCombined, GraduationCap, ShieldCheck, Star, Users } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

const Rank = () => {
    const data = [
        {
            icon: <ShieldCheck className='h-6 w-6 text-primaryColor' />,
            title: "Certified Faculty",
            description: "All our educators hold advanced degrees and professional certifications."
        },
        {
            icon: <ChartNoAxesCombined className='h-6 w-6 text-primaryColor' />,
            title: "Progress Tracking",
            description: "Weekly detailed performance reports and analytics for parents and students."
        },
        {
            icon: <Users className='h-6 w-6 text-primaryColor' />,
            title: "Small Batches",
            description: "Maximum 12 students per session to ensure personalized attention."
        },
        {
            icon: <GraduationCap className='h-6 w-6 text-primaryColor' />,
            title: "Vast Resource Library",
            description: "Unlimited access to our digital archive of study materials and videos."
        },
    ]
    return (
        <div className="bg-light-blue">
            <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4 flex md:flex-row flex-col gap-6'>
                <div className="md:w-[50%] w-full">
                    <h1 className='text-left md:text-4xl text-2xl font-semibold text-primaryFontColor mb-4'>Why Smart Study Center Stands Out</h1>
                    <p className='max-w-3xl mx-auto text-left md:text-base text-sm text-secondaryFontColor leading-relaxed'>We don&apos;t just teach; we inspire. Our center combines traditional academic rigor with modern technological tools to create an unparalleled learning experience.</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-12">
                        {data.map((item, index) => (
                            <div key={index} className='space-y-1'>
                                {item?.icon}
                                <h1 className='text-primaryFontColor text-lg font-semibold tracking-wide'>{item.title}</h1>
                                <p className='text-secondaryFontColor md:text-base text-sm'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:w-[50%] w-full flex items-center md:justify-end justify-center">
                    <div className="md:w-[500px] md:h-[500px] h-[300px] w-[300px] rounded-full bg-[#D4E2FB] flex items-center justify-center relative">
                        <Image
                            src="/img/hero3.jpg"
                            alt="specialized"
                            width={1000}
                            height={1000}
                            className='w-[90%] h-[90%] object-cover rounded-full border-4 border-tertiary'
                            priority
                        />
                        <div className="absolute md:bottom-[40%] md:-left-15 bottom-13 left-10 flex gap-3 items-center bg-white min-w-66 p-2 rounded-xl border border-gray-200 shadow-2xl">
                            <Button size="icon" className='rounded-full bg-secondaryColor hover:bg-secondaryColor text-white'>
                                <Star className="h-4 w-4" />
                            </Button>
                            <div className="">
                                <h3 className='text-xs text-secondaryFontColor font-semibold'>Top Rated</h3>
                                <p className='text-sm text-primaryFontColor font-semibold'>Rank #1 Institute in Karawal Nagar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rank