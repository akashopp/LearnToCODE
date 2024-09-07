import React, { useState } from 'react'
import { resolvePath, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function AddCourse() {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [price, setprice] = useState(0)
  const [imageUrl, setimageUrl] = useState("")
  const [isPublished, setisPublished] = useState("YES")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = { title, desc, price, imageUrl  };

    const response = await fetch("http://localhost:8000/course/createcourse", {
      method: "POST",
      body: JSON.stringify(course),
      headers:{
        "Content-type": "application/json"
      }
    })

    const result = await response.json();

    if(response.ok) {

      navigate("/admin");

    }


  };

  return (

    <>

    <Navbar isLogged={true} addCourse={true} />

    <div className="flex justify-center items-center h-screen m-20">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[rgb(57, 57, 57)] border-2 border-white m-20 p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Course</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-white text-xl">
            Course title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => { settitle(e.target.value) }}
            className="mt-1 block w-full px-3 py-2 border text-white text-xl rounded-md shadow-sm focus:outline-none "
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-white text-xl">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => { setprice(e.target.value) }}
            className="mt-1 block w-full px-3 py-2 border text-white text-xl rounded-md shadow-sm focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="block text-white text-xl">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => { setdesc(e.target.value) }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-white text-xl"
            placeholder="Enter your message"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-white text-xl">
            ImageUrl
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => { setimageUrl(e.target.value) }}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none text-white text-xl"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="isPublished" className="block text-white text-xl">Is Publised</label>
          <select
            id="isPublished"
            value={isPublished}
            onChange={(e) => setisPublished(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring text-white text-xl"
            required
          >
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>

    <Footer/>

  </>
  );
}

export default AddCourse
