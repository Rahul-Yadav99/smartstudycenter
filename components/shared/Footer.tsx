import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({ lable }: { lable: string }) => {
    const menu = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Videos', href: '/videos' },
    ]
    const socialMedia = [
        { title: 'Instagram', href: 'https://www.instagram.com/viralshaadi/' },
        { title: 'YouTube', href: 'https://www.youtube.com/channel/UC-Cg_6V3m2oJq6iWvY8Uoow' },
        { title: 'Facebook', href: 'https://www.facebook.com/viralshaadi/' },
        { title: 'Twitter', href: 'https://twitter.com/viralshaadi/' },
    ]
    return (
        <div className="bg-light-blue w-full">
            <div className='max-w-7xl mx-auto w-full md:py-10 py-5 md:px-0 px-4 grid md:grid-cols-5 grid-cols-1 md:gap-0 gap-10'>
                {/* <Image src={'/img/logo.PNG'} alt='logo' width={200} height={200} className='w-32 col-span-3' /> */}
                <div className="col-span-3 md:space-y-3 space-y-2">
                    <h1 className='text-2xl font-semibold text-primaryFontColor'>Smart Study Center</h1>
                    <p className='max-w-lg text-secondaryFontColor text-left md:text-base text-sm leading-relaxed'>Empowering the next generation of scholars through modern academic excellence.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-primaryFontColor font-heading text-xl font-semibold'>Navigation</h1>
                    {menu.map((item, index) => (
                        <Link
                            href={item.href}
                            key={index}
                            className={`text-sm w-fit font-semibold tracking-widest capitalize transition-colors duration-300 hover:text-primaryColor  ${lable === item.title ? 'text-primaryColor' : 'text-secondaryFontColor'}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-primaryFontColor font-heading text-xl font-semibold'>Social</h1>
                    {socialMedia.map((item, index) => (
                        <Link
                            href={item.href}
                            target='_blank'
                            key={index}
                            className={`text-sm w-fit font-semibold tracking-widest capitalize transition-colors duration-300 hover:text-primaryColor  ${lable === item.title ? 'text-primaryColor' : 'text-secondaryFontColor'}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='w-full h-px bg-neutral/20' />
            <div className="w-[90%] mx-auto md:py-10 py-5">
                <p className="text-secondaryFontColor text-center font-medium text-sm">© {new Date().getFullYear()} Smart Study Center. All rights reserved. <Link href={'https://www.linkedin.com/in/rahul-yadav-83768b2bb/'} target='_blank' className='text-primaryColor'>Made with ❤️ by Rahul Yadav</Link></p>
            </div>
        </div>

    )
}

export default Footer