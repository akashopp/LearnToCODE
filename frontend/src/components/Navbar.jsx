import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <nav className="bg-[#720e9e] p-4 top-0">
      <div className="container mx-auto flex justify-between items-center bg-[#720e9e]">

        <div className="flex bg-[#720e9e]">
        <div className="text-white text-4xl font-bold bg-[#720e9e]">LearnToCODE</div>

        {props.addCourse && 

          <Link to={'/addcourse'} className="text-white mx-10 text-2xl m-2 bg-[#720e9e]">Add Course</Link>
          
        }

        {props.courseList && 

        <Link to={`/courselist/${props.user_id}`} className="text-white my-2 mx-8 text-2xl bg-[#720e9e]">Course List</Link>

        }

        </div>

        {!props.isLogged && <div className="hidden md:flex space-x-6 bg-[#720e9e]">

          <Link to="/login" className="text-white hover:bg-purple-500 bg-purple-400 rounded-full p-3 w-30">
            Login
          </Link>
          <Link to="/register" className="text-white  hover:bg-purple-500 bg-purple-400 rounded-full p-3 w-30">
            Register
          </Link>

        </div>

        }

        {props.isLogged && <div className="hidden md:flex space-x-6 bg-[#720e9e]">

          <Link to="/login" className=" text-white hover:bg-purple-500 bg-purple-400 rounded-full p-3 w-30">
            Logout
          </Link>

        </div>

        }


        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
            Login
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
            Register
          </a>
        </div>
      )}

    </nav>
  );
};

export default Navbar;