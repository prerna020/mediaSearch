import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'

function App() {
  

  return (
    <div className='h-full w-full bg-zinc-900'>
      <Routes>
        <Route path='/' element={< HomePage/>} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>
    </div>
  ) 
}

export default App
