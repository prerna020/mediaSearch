import { useSelector } from 'react-redux'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const { query } = useSelector((store) => store.search)
    return (
        <div className='h-full w-full bg-zinc-900'>
            <div className='flex justify-between items-center py-5 px-10 bg-gray-800 text-white '>
                <h2 className='font-bold text-2xl'>
                    MediaSearch
                </h2>
                <div className='flex gap-5 font-bold items-center'>
                    <Link to='/'>Search</Link>
                    <Link to='/collection'>Collections </Link>
                </div>
            </div>
            
            <SearchBar />
            {query != '' ? <div><Tabs /><ResultGrid /></div> : ''}
        </div>
    )
}

export default HomePage