import React from 'react'
import { ChartNoAxesCombined, GraduationCap, ShieldCheck, Users } from 'lucide-react'

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
            <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4'>
                <div className="md:w-[50%]">
                    <h1 className='text-left md:text-4xl text-2xl font-semibold text-primaryFontColor mb-4'>Why Smart Study Center Stands Out</h1>
                    <p className='max-w-3xl mx-auto text-left md:text-base text-sm text-secondaryFontColor leading-relaxed'>We don&apos;t just teach; we inspire. Our center combines traditional academic rigor with modern technological tools to create an unparalleled learning experience.</p>
                    <div className="grid grid-cols-2 gap-8 mt-12">
                        {data.map((item, index) => (
                            <div key={index} className='space-y-1'>
                                {item?.icon}
                                <h1 className='text-primaryFontColor text-lg font-semibold tracking-wide'>{item.title}</h1>
                                <p className='text-secondaryFontColor md:text-base text-sm'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rank