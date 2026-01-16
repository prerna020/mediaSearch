import React, { useEffect } from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setError, setQuery, setLoading, setResults } from '../redux/features/searchSlice'
import { useSelector, useDispatch } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(()=>{
        if(!query) return 
        const getData = async ()=>{
            try {
                let data= [];
                if(activeTab == 'photos'){
                    let respone = await fetchPhotos(query)
                    data = respone.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                }
                if(activeTab == 'videos'){
                    let respone = await fetchVideos(query)
                    data = respone.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }
                if(activeTab == 'gif'){
                    let respone = await fetchGIF(query)
                    data = respone.data.results.map((item) => ({
                        id: item.id,
                        title: item.title || 'GIF',
                        type: 'gif',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                        url:item.url
                    }))

                }
                dispatch(setResults(data))
                // console.log(data)
            } catch (err) {
                dispatch(setError(err))
            }
        }
        getData()
    },[activeTab,query])
    if(error) return <h1>Error!</h1>
    if(loading) return <h1>Loading, please wait...</h1>
    return (
        <div className='flex justify-between w-full flex-wrap gap-4 overflow-auto px-10'>
            {results.map((item, idx)=>{
                return <div key={idx}>
                    <ResultCard item={item}/>
                </div>
            })}
        </div>
    )
}

export default ResultGrid