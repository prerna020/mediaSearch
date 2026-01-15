import { useState } from 'react'
import './index.css'
import { fetchPhotos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import ResultGrid from './components/ResultGrid'
import Tabs from './components/Tabs'
function App() {
  

  return (
    <div className='h-screen w-full bg-zinc-900'>
      < SearchBar />
      <Tabs/>
    </div>
  ) 
}

export default App
