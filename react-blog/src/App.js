import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { BlogProvider } from './components/BlogContext';
import CreateBlog  from './components/CreateBlog'
import Blog from './components/Blog'
import BlogDetails from './components/BlogDetails';

function App() {

  return (
    < BlogProvider>
     <Routes>
      <Route path='/' element ={<CreateBlog />} />
      <Route path='/blogs' element ={<Blog />} />
      <Route path='/blogs/:id' element = {<BlogDetails />} />
     </Routes>
    </BlogProvider>
  );
}

export default App;
