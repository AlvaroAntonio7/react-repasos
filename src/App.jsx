
import './App.css'
import NavBar from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import CrudyFormularios from './routes/CrudyFormularios'

function App() {


  return (
    <>
    <NavBar></NavBar>

    <Routes>
    <Route path='/' element={<CrudyFormularios></CrudyFormularios>}></Route>
        <Route path='/crudyforms' element={<CrudyFormularios></CrudyFormularios>}></Route>
        
        
        <Route path="/*" element={<Navigate to='/' />}></Route>
    </Routes>
      
    </>
  )
}

export default App
