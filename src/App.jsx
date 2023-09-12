import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/blogs'
import Boksmarks from './components/Boksmarks/Boksmarks'

function App() {
  

  return (
    <>
      <Header></Header>
       <div className='md:flex'>

       <Blogs></Blogs>
       <Boksmarks></Boksmarks>

        
        </div>      
    </>
  )
}

export default App
