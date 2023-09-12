import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/blogs'
import Boksmarks from './components/Boksmarks/Boksmarks'
import { useState } from 'react'

function App() {
  const [bookmr,setbookmr]= useState([])
  const [redingTime, setRedingTime]=useState(0)
  const handleBook= (blog)=>{
   const newBookmarks = [...bookmr,blog];
   setbookmr(newBookmarks);
  }
  const handlerMarker=(time)=>{
    console.log('hello marking time',time)
  }
  
  

  return (
    <>
      <Header></Header>
       <div className='md:flex max-w-6xl mx-auto'>

       <Blogs handleBook={handleBook}></Blogs>
       <Boksmarks bookmr={bookmr} handlerMarker={handlerMarker}></Boksmarks>

        
        </div>      
    </>
  )
}

export default App
