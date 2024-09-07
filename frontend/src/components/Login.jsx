import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {email, password, role};

    const response = await fetch("http://localhost:8000/user/finduser", {
      method : "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json();

    if(result.success) {
      const id = result.user_id;
      if(role === "admin") navigate("/admin");
      else navigate(`/user/${id}`);
    }else {
      alert("User doesn't exist");
    }

  };

  return (
    <>
    <Navbar isLogged={false}/>
    <div className="flex justify-center items-center h-screen bg-[rgb(57, 57, 57)] m-20">
      <div className="w-full max-w-md p-8 bg-[rgb(57, 57, 57)] rounded text-white border-2 border-white">
        <h2 className="text-2xl font-bold mb-6 text-center  ">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300 text-white text-xl"
              placeholder="Enter your email"
              required
            />
          </div>
 
          <div className="mb-4 text-white text-xl ">
            <label htmlFor="password" className="block text-white text-xl " >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring  text-white text-xl"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-white text-xl">Select Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setrole(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300 text-white text-xl"
              
              required
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/register" className="text-blue-500 hover:underline">
            Don't have an account
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
