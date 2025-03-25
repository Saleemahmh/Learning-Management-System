import './App.css'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
