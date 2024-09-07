import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

function CourseList() {

  const { id } = useParams();
  const [courses, setcourses] = useState()

  const getCourses = async () => {

    const response = await fetch(`http://localhost:8000/coursebought/getcoursebyid/${id}`, {
      method: "GET"
    })

    const result = await response.json();

    setcourses(result);

  }

  useEffect(() => {
    getCourses();
  }, [])

  return (
    <>
      <Navbar isLogged={true} />
      
      <div className='text-4xl text-center m-6'>Course Bought</div>

      <div className='flex justify-center'>

      <div className='flex-col justify-center items-center w-1/2 h-screen'>

        {courses?.map((ele) => (

          <div key={ele._id} className="flex justify-between max-w-screen-xl h-36 border-2 rounded-l-full border-white my-3">

            <div className='flex p-2'>
              <div className="text-2xl border-2 rounded-3xl rounded-l-full w-44 flex justify-center items-center">
                {ele.title}</div>
              <div className="w-2/3 flex justify-end items-center text-start gap-0 mx-2">{ele.desc}</div>

            </div>

            <img src={ele.imageUrl} alt="not loading" className='p-2'/>


          </div>

        ))}

        

      </div>
      </div>


    </>
  )
}

export default CourseList
