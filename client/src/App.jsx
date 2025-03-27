import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/allcourses" element={<Courses/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App