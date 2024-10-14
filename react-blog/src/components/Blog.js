import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from './BlogContext';

const Blog = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 px-5">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Our Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs
          .filter(blog => blog.title && blog.body) // Add this filter to prevent empty blogs
          .map((blog) => (
            <div key={blog.id} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 hover:shadow-2xl hover:bg-opacity-30 transition-all duration-300">
              <Link to={`/blogs/${blog.id}`} className="block">
                <h3 className="text-2xl font-bold text-white mb-4">{blog.title}</h3>
                <p className="text-white opacity-80 mb-4">
                  {blog.body.substring(0, 100)}... {/* Show first 100 characters of the blog */}
                </p>
                <button className="mt-4 py-2 px-4 create-btn font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Read More
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog
