
import './App.css'
import MainPage from './pages/MainPage.js'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import { Route, Routes} from 'react-router-dom'
import { Toaster } from 'sonner'

function App() {
  return <>
  <Toaster position="top-right" richColors />
  <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/signup' element={<RegistrationPage/>}/>
    <Route path='/signin' element={<LoginPage/>}/>
  </Routes>
  </>
}

export default App
