import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero/Hero'
import About from './Pages/About/About'
import Location from './Pages/Location/Location'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/location' element={<Location />} />
    </Routes>
  )
}

export default App
