import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import HomeAdmin from './components/HomeAdmin.jsx'
import HomeUser from './components/HomeUser.jsx'
import AddCourse from './components/AddCourse.jsx'
import UpdateCourse from './components/UpdateCourse.jsx'
import CourseList from './components/CourseList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isLogged, setisLogged] = useState(false)
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Register />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login isLogged={isLogged} />}></Route>
          <Route exact path="/admin" element={<HomeAdmin/>}></Route>
          <Route exact path="/user/:id" element={<HomeUser/>}></Route>
          <Route exact path="/addcourse" element={<AddCourse/>}></Route>
          <Route exact path="/updatecourse/:id" element={<UpdateCourse/>}></Route>
          <Route exact path="/courselist/:id" element={<CourseList/>}></Route>
    
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
