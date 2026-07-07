'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import VideoGridSkeleton from "./VideoGridSkeleton"

type Subject = { name: string }
type Video = { url: string; subject: string; title: string }

const VideoHero = () => {
    const router = useRouter()

    const [subjects, setSubjects] = useState<Subject[]>([])
    const [videos, setVideos] = useState<Video[]>([])
    const [selectedSubject, setSelectedSubject] = useState<string>('all')
    const [loading, setLoading] = useState<boolean>(false)

    // Fetch subjects once on mount
    useEffect(() => {
        fetch('http://localhost:5000/api/subjects')
            .then(res => res.json())
            .then(data => setSubjects(data?.subjects ?? []))
    }, [])

    // Fetch videos whenever selectedSubject changes
    const fetchVideos = (subject: string) => {
        setLoading(true)
        const query = subject && subject !== 'all' ? `?subject=${encodeURIComponent(subject)}` : ''
        fetch(`http://localhost:5000/api/videos${query}`)
            .then(res => res.json())
            .then(data => setVideos(data?.videos ?? []))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchVideos(selectedSubject)
    }, [selectedSubject])

    const handleSubjectClick = (subject: string) => {
        setSelectedSubject(subject)
    }

    return (
        <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4'>
            <iframe
                width="100%"
                // height="500"
                src="https://www.youtube.com/embed/aPGvDqjKi6U"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className='rounded-xl md:h-[500px] h-50'
            ></iframe>

            {/* Subject filters */}
            <div className="mt-12">
                <h2 className="md:text-lg text-sm font-semibold text-primaryFontColor mb-3">Filter Video&rsquo;s by Subject</h2>
                <div className="flex flex-wrap gap-2">
                    {/* "All" pill */}
                    <Button
                        key="all"
                        className={`capitalize hover:cursor-pointer transition-all ${selectedSubject === 'all'
                            ? 'bg-primaryColor text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-primaryColor/10'
                            }`}
                        onClick={() => handleSubjectClick('all')}
                    >
                        All Topics
                    </Button>

                    {subjects.map((sub, idx) => (
                        <Button
                            key={idx}
                            className={`capitalize hover:cursor-pointer transition-all ${selectedSubject === sub.name
                                ? 'bg-primaryColor text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-primaryColor/20'
                                }`}
                            onClick={() => handleSubjectClick(sub.name)}
                        >
                            {sub.name}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Video grid */}
            <div className="mt-12">
                {loading ? (
                    <VideoGridSkeleton count={6} />
                ) : videos.length === 0 ? (
                    <div className="flex items-center justify-center py-20 text-gray-400">
                        No videos found for this subject.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {videos.map((video, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl overflow-hidden cursor-pointer border border-neutral/20 hover:shadow-lg transition-shadow"
                            >
                                <iframe
                                    width="100%"
                                    height="220"
                                    src={`https://www.youtube.com/embed/${video.url}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="uppercase text-xs font-semibold tracking-wider text-secondaryColor mb-1">
                                        {video.subject}
                                    </h3>
                                    <h3 className="text-sm font-semibold text-primaryFontColor line-clamp-2">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default VideoHero