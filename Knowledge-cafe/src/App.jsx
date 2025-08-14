import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState([]);

  const handleBookMark = blog => {
    // console.log('book mark adding soon')
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkedRead = time => {
    console.log('reading time', time);
  }

  return (
    <>
      
      {/* <h1 className='text-6xl bg-red-300'>Knowledge Cafe</h1> */}
      <Header></Header>
      <div className='md:flex pt-16 max-w-7xl mx-auto'>
        <Blogs handleMarkedRead={handleMarkedRead} handleBookMark={handleBookMark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
