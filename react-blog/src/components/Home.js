import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen home-bg text-white p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
            Publish your passions, your way
        </h1>
        <p className="text-lg mb-8 text-center">
            Create a unique and beautiful blog easily
        </p>
        <button 
            onClick={()=> navigate('/create')}
            className="create-btn hover:bg-orange-500 font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        >
            CREATE YOUR BLOG
        </button>
    </div>
  )
}

export default Home