import { useState } from 'react'
import './index.css'
import { fetchPhotos } from './api/mediaApi'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-zinc-900'>
      < SearchBar />
    </div>
  )
}

export default App
