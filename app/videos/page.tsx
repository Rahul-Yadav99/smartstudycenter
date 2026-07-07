import Footer from '@/components/shared/Footer'
import NavBar from '@/components/shared/NavBar'
import VideoHero from '@/components/VideoHero'
import React from 'react'

const Video = () => {
    return (
        <>
            <NavBar lable='Videos' />
            <VideoHero />
            <Footer lable='Videos' />
        </>
    )
}

export default Video