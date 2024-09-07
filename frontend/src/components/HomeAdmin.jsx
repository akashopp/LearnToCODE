import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function HomeAdmin() {

  const [courses, Setcourses] = useState()
  const navigate = useNavigate();

  const handleDelete = async (id) => {

    const response = await fetch(`http://localhost:8000/course/deletecourse/${id}`, {
      method: "DELETE"
    })

    const result = await response.json();

    getUsers();

  }

  const getUsers = async () => {
    const response = await fetch("http://localhost:8000/course/getcourse", {
      method: "GET"
    })

    const result = await response.json();

    if (response.ok) {
      Setcourses(result.items);
      console.log(result)
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <Navbar isLogged={true} addCourse={true} />
      <div>
        <div className='text-3xl flex justify-center'>Courses</div>

        <div className='flex flex-wrap justify-center items-center'>

          {courses?.map((ele) => (

            <div key={ele._id} className="border-2 border-white h-[600px] w-80 p-4 rounded-2xl overflow-hidden shadow-lg bg-[#191818] m-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <img
                className="h-[250px] w-full rounded"
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
                {/* <Link onClick={()=>handleBuy(ele.title, ele.desc, ele.price, ele.imageUrl)} className="bg-#191818-500 text-white font-bold py-2 px-4 rounded hover:bg-green-500 focus:outline-none">
      Buy
    </Link> */}

                <Link to={`/updatecourse/${ele._id}`} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none">
                  Edit
                </Link>
                <button onClick={() => handleDelete(ele._id)} className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-800 focus:outline-none">
                  Delete
                </button>
              </div>
            </div>

          ))}

          {/* {courses?.map((ele) => (

          <div key={ele._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img
              className="w-full"
              src={ele.imageUrl}
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ele.title}</div>
              <p className="text-gray-700 text-base">
                {ele.desc}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-evenly">
              <Link to={`/updatecourse/${ele._id}`} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none">
                Edit
              </Link>
              <button onClick={()=>handleDelete(ele._id)} className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-800 focus:outline-none">
                Delete
              </button>
            </div>
          </div>

        ))} */}

        </div>


      </div>
      <Footer/>
    </>
  )
}

export default HomeAdmin
