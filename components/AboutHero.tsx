import { Eye, GraduationCap, Rocket } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const AboutHero = () => {
    const mission = [
        {
            icon: <Rocket />,
            title: "Our Mission",
            description: "To empower students with the tools of critical thinking and structured knowledge, enabling them to navigate complex academic landscapes with confidence and integrity. We strive to make high-level learning accessible through personalized attention and rigorous standards."
        },
        {
            icon: <Eye />,
            title: "Our Vision",
            description: "To become a global lighthouse for academic excellence, where the pursuit of knowledge is celebrated as a lifelong journey. We envision a future where every student possesses the intellectual agility to solve the world's most pressing challenges."
        },

    ]
    return (
        <>
            <div className='w-full bg-light-blue'>
                <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4 flex flex-col items-center justify-center space-y-3'>
                    <div className="flex items-center gap-2 text-[10px] tracking-wider font-semibold text-primaryColor p-1 bg-light-blue w-fit rounded-full border border-neutral-300 px-2">
                        <GraduationCap size={20} />
                        <p className='uppercase'>Legacy of Excellence</p>
                    </div>
                    <h1 className='md:text-5xl text-2xl font-semibold text-primaryFontColor md:leading-15 leading-8 tracking-wide text-center'>Elevating Academic Standards <br /> with Focused Intelligence</h1>
                    <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed text-center'>A sanctuary for scholars where traditional wisdom meets modern pedagogical <br /> innovation.</p>
                </div>
            </div>

            <div className='w-full'>
                <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4 flex md:flex-row flex-col gap-8'>
                    <div className="md:w-[60%] w-full">
                        <h2 className='md:text-3xl text-xl font-semibold text-primaryFontColor text-left mb-2'>The Genesis of Smart Study</h2>
                        <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed text-left'>Founded in 2012, Smart Study Center began as a small initiative to bridge the gap between classroom theory and practical application. What started with three dedicated educators and a single classroom has evolved into a leading academic hub, fostering thousands of success stories across diverse disciplines.
                            <br /><br />
                            We believed that education should not be a one-size-fits-all model. By integrating cognitive science into our tutoring frameworks, we developed a system that adapts to how students actually learn, rather than how they are expected to perform.
                        </p>
                    </div>
                    <div className="md:w-[40%]">
                        <Image
                            src="/img/hero4.jpg"
                            alt="about"
                            width={1000}
                            height={1000}
                            className='w-full h-full object-cover rounded-xl'
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className='w-full bg-light-blue'>
                <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {mission.map((item, index) => (
                        <div key={index} className='bg-tertiary p-4 h-70 transition-all duration-300 border border-neutral/20 hover:border-secondaryColor rounded-xl hover:cursor-pointer space-y-3'>
                            <Button size='icon' className='bg-primaryColor hover:bg-primaryColor/90 text-white cursor-pointer h-10 w-10'>
                                {item?.icon}
                            </Button>
                            <h3 className='text-lg font-semibold text-primaryFontColor'>{item?.title}</h3>
                            <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed text-left'>{item?.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default AboutHero