import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './components/pages/Index/Index'
import Productos from './components/pages/Productos/Productos'
import Contacto from './components/pages/Contacto/Contacto'
import Servicios from './components/pages/Servicios/Servicios'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
