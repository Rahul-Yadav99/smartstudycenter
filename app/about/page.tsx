import AboutHero from '@/components/AboutHero'
import Footer from '@/components/shared/Footer'
import NavBar from '@/components/shared/NavBar'
import React from 'react'

const About = () => {
    return (
        <>
            <NavBar lable='About' />
            <AboutHero />
            <Footer lable='About' />
        </>
    )
}

export default About