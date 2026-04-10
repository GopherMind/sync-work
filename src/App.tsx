
import './App.css'
import MainPage from './pages/MainPage.js'
import RegistrationPage from './pages/RegistrationPage'
import { Route, Routes} from 'react-router-dom'

function App() {
  return <>
  <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/login' element={<RegistrationPage/>}/>
  </Routes>
  </>
}

export default App
