import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <h1 className='text-6xl bg-red-300'>Knowledge Cafe</h1> */}
      <Header></Header>
      <Blogs></Blogs>
     
    </>
  )
}

export default App
