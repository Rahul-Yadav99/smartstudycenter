'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const NavBar = ({ lable }: { lable: string }) => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const menu = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Videos', href: '/videos' },
    ]

    return (
        <div className='w-full sticky top-0 z-100 border-b border-neutral/20 bg-tertiary'>
            <nav className='max-w-7xl mx-auto flex items-center justify-between py-3 md:px-0 px-3'>
                {/* Logo */}
                <Link
                    href='/'
                    className='md:text-lg text-sm text-primaryColor font-heading font-bold tracking-wider uppercase'
                >
                    {/* <Image src={'/img/logo.PNG'} alt='logo' width={50} height={80} className="w-12" /> */}
                    <h1>Smart Study Center</h1>
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8'>
                    {menu.map((item) => (
                        <li key={item.title}>
                            <Link
                                href={item.href}
                                className={`text-sm font-semibold tracking-widest capitalize transition-colors duration-300 hover:text-primaryColor  ${lable === item.title ? 'text-primaryColor' : 'text-primaryFontColor'}`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <Button
                    onClick={() => router.push('/contact')}
                    className='hidden md:flex bg-primaryColor hover:bg-primaryColor/90 cursor-pointer'
                >
                    Contact Us
                </Button>

                {/* Mobile Hamburger */}
                <button
                    className='md:hidden text-primaryColor'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className='md:hidden bg-light-neutral w-full px-6 pb-6 flex flex-col gap-4'>
                    {menu.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-300 py-2 border-b border-white/10 ${lable === item.title
                                ? "text-primaryColor"
                                : "text-primaryFontColor hover:text-primaryColor"
                                }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <Button
                        onClick={() => { router.push('/contact'); setIsOpen(false) }}
                        className='rounded-2xl px-8 py-2 border border-primaryColor text-white hover:bg-primaryColor hover:text-primaryColor font-semibold cursor-pointer bg-primaryColor w-full mt-2'
                    >
                        Contact Us
                    </Button>
                </div>
            )}
        </div>
    )
}

export default NavBar