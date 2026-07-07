const VideoCardSkeleton = () => (
    <div className="rounded-xl overflow-hidden border border-neutral/20 animate-pulse">
        {/* Thumbnail placeholder */}
        <div className="w-full h-[220px] bg-gray-200" />
        {/* Text placeholders */}
        <div className="p-4 space-y-2">
            <div className="h-3 w-20 bg-gray-200 rounded-full" />
            <div className="h-4 w-full bg-gray-200 rounded-full" />
            <div className="h-4 w-3/4 bg-gray-200 rounded-full" />
        </div>
    </div>
)

const VideoGridSkeleton = ({ count = 6 }: { count?: number }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, idx) => (
            <VideoCardSkeleton key={idx} />
        ))}
    </div>
)

export default VideoGridSkeleton
