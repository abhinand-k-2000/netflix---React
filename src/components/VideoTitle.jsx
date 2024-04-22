
const VideoTitle = ({movie}) => {
    const {original_title, overview} = movie
    return (
        <div className="w-[100%] h-[1000px] pt-[15%] px-12 absolute  text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-3xl">{original_title}</h1>
            <p className="w-1/4 mt-2">{overview}</p>
            <div className="mt-3">
                <button className="px-4 py-2 rounded-md m-2 text-black font-bold  bg-white hover:bg-opacity-60" >▷ Play</button>
                <button className="px-4 py-2 rounded-md m-2 text-white font-bold  bg-slate-500 hover:bg-opacity-60">🛈 More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle