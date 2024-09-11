import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const addBlog = (title, body) => {
    const newBlog = { id: blogs.length + 1, title, body };
    setBlogs([...blogs, newBlog]);
    navigate('/blogs'); 
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
