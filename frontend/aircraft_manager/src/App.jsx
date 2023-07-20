import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar  from './components/Navbar'


function App() {
  
  //importaciones de los componentes
  
  return(<Routes>
    <Route path = '/' element = {<Home/>}></Route>
    <Route path = '/' element = {<Navbar/>}></Route>
  </Routes>)
}

export default App
