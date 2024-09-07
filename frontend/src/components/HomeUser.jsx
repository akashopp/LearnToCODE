import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function HomeUser() {

  const [courses, Setcourses] = useState()
  const navigate = useNavigate();
  const id = useParams();

  const handleDelete = async (id) => {

    const response = await fetch(`http://localhost:8000/course/deletecourse/${id}`, {
      method: "DELETE"
    })

    const result = await response.json();
    
    console.log(result);

    getUsers();

  }

  const getUsers = async () => {
    const response = await fetch("http://localhost:8000/course/getcourse", {
      method: "GET"
    })

    const result = await response.json();

    if (response.ok) {
      Setcourses(result.items);
    }
  }

  const handleBuy = async(course_id, title, desc, price, imageUrl) => {

    const valid = {id, imageUrl};
    const user_id = id.id;

    const response = await fetch(`http://localhost:8000/coursebought/exist/${user_id}/${course_id}`, {
      method: "GET"
    })

    const result = await response.json();

    if(result.success) {

      const course = {user_id, course_id, title, desc, price, imageUrl};

      const add = await fetch("http://localhost:8000/coursebought/addcoursebought", {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
          "Content-Type" : "application/json"
        }
      })

      const res = await add.json();

      if(add.ok) {
        alert("Course bought Successfully");
      }

    }else {
      alert("Course already bought");
    }

  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
  <Navbar isLogged={true} courseList={true} user_id = {id.id}/>
    <div>
      <div className='text-5xl flex justify-center m-10'>Courses</div>

      <div className='flex flex-wrap justify-center items-center gap-9 border-white '>

        {courses?.map((ele) => (

          <div key={ele._id} className="border-2 border-white h-[600px] w-80 p-4 rounded-2xl overflow-hidden shadow-lg bg-[#191818] m-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              className="h-[280px] w-full rounded"
              src={ele.imageUrl}
              alt="Card Image"
            />
            <div className="px-6 py-4 bg-[#191818]">
              <div className="font-bold text-xl mb-2 bg-[#191818] ">{ele.title}</div>
              <p className=" text-base bg-[#191818]">
                {ele.desc}
              </p>
            </div>

            <div className='bg-[#191818] flex justify-center items-center'> 
                <span className='bg-green-600 p-1 rounded-full text-white font-bold w-14 text-center'>{ele.price}</span>
              </div>

            <div className="px-6 pt-4 pb-2 flex justify-evenly bg-[#191818] ">
              <Link onClick={()=>handleBuy(ele._id, ele.title, ele.desc, ele.price, ele.imageUrl)} className="bg-#191818-500 text-white font-bold py-2 px-4 rounded hover:bg-green-500 focus:outline-none">
                Buy
              </Link>
            </div>
          </div>

        ))}

      </div>


    </div>

    <Footer/>
    
    </>
  )
}

export default HomeUser
