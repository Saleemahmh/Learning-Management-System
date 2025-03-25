import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <div>
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/allcourses" element={<Courses/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer></Footer>
      </Router>
    </div>
  )
}

export default App