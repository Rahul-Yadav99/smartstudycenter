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

    const faculty = [
        {
            title: 'Mathematics & Logic',
            name: 'Ranjeet Yadav',
            description: 'With over 20 years of research in discrete mathematics, Dr. Vance brings an unparalleled depth of logic and precision to our curriculum.',
            img: '/img/f1.jpg'
        },
        {
            title: 'Computational Science',
            name: 'Sandeep Yadav',
            description: 'Prof. Thorne specializes in algorithmic thinking and AI. He leads our digital transformation workshops for secondary students.',
            img: '/img/f2.jpg'
        },
        {
            title: 'Humanities & Rhetoric',
            name: 'Manjeet Yadav',
            description: 'A champion of critical discourse, Sarah helps students master the art of persuasive writing and ethical debate.',
            img: '/img/f3.jpg'
        },
    ]

    const data = [
        {
            value: '98%',
            label: "Success Rate"
        },
        {
            value: '12+',
            label: "Years Experience"
        },
        {
            value: '5000+',
            label: "Students Taught"
        },
        {
            value: '45',
            label: "Expert Mentors"
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

            <div className='w-full bg-tertiary'>
                <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4'>
                    <div className="max-w-3xl space-y-2">
                        <h2 className='text-3xl font-semibold text-primaryFontColor'>Our Expert Faculty</h2>
                        <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed text-left'>Learn from world-class educators, researchers, and mentors who are passionate about student growth.</p>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mt-4">
                        {
                            faculty.map((item, index) => (
                                <div key={index} className="space-y-3 w-80 min-h-[300px] mx-auto">
                                    <Image
                                        src={item?.img}
                                        alt="about"
                                        width={1000}
                                        height={1000}
                                        className='h-80 w-full object-cover rounded-xl'
                                        priority
                                    />
                                    <div className=''>
                                        <h3 className='uppercase text-[10px] font-semibold text-secondaryColor tracking-wider'>{item.title}</h3>
                                        <h2 className='text-base text-primaryFontColor font-semibold'>{item.name}</h2>
                                        <p className='md:text-sm mt-1 text-xs text-secondaryFontColor leading-relaxed'>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='w-full bg-primaryColor'>
                <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4 flex md:flex-row flex-col gap-5 items-center justify-around'>
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center ">
                            <h3 className='text-5xl font-bold text-tertiary'>{item.value}</h3>
                            <h3 className='uppercase text-xs text-tertiary'>{item.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default AboutHero