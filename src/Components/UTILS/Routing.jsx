import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Work from '../Work'
import Culture from '../Culture'
import News from '../News'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/work' element={<Work/>}></Route>
            <Route path='/culture' element={<Culture/>}></Route>
            <Route path='/news' element={<News/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing
