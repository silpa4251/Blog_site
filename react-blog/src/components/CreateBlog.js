import React, { useState, useContext } from 'react';
import { BlogContext } from './BlogContext';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addBlog } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, body);
  };

  return (
    <div className="min-h-screen home-bg flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-lg p-8 max-w-md w-full">     
          <h2 className="text-3xl font-bold text-center text-white mb-6">
        Create Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label className="block text-white font-semibold mb-2">Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-gray-300 border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your blog title"
          />
        </div>
        <div>
        <label className="block text-white font-semibold mb-2">Body:</label>
          <textarea
            value={body}
            required
            onChange={(e) => setBody(e.target.value)}
            className="w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-gray-300 border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="5"
            placeholder="Write your blog content"

          />
        </div>
        <button type="submit"  className="w-full create-btn font-bold py-2 px-4 rounded-lg hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-300"
          >
            Submit</button>
      </form>
    </div>
    </div>
  );
};

export default CreateBlog;
