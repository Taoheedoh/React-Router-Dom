import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'


function App() {
  

  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
