import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogContext } from './BlogContext';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <h2 className="text-4xl font-bold text-white shadow-lg">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-5">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="p-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 pb-4 border-b-4 border-gradient-to-r from-yellow-400 to-red-500">
            {blog.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed bg-gray-100 p-5 rounded-lg shadow-inner mb-6">
            {blog.body}
          </p>
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate(-1)}
              className="py-3 px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 transition-transform duration-300 transform hover:scale-110"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails
