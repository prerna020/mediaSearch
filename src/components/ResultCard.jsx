
const ResultCard = ({item}) => {
    const addToCollection = (item) => {

    }
    return (
        <div className="relative w-70 h-70 bg-blue-300 rounded-2xl overflow-hidden">

            {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
            {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
            {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
            
            
            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <button
                    onClick={() => {
                        addToCollection(item)
                    }}
                    className='bg-white active:scale-95 text-zinc-600 rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard