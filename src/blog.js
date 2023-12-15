// BlogPage.js
import React, { useState } from 'react';
import './blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      title: title,
      content: content,
    };

    setBlogs([...blogs, newBlog]);
    setTitle('');
    setContent('');
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div>
      <h2>Blog</h2>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => handleDeleteBlog(blog.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <hr />
      <h3>Créer un nouveau blog</h3>
      <form>
        <label>
          Titre:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Contenu:
          <textarea value={content} onChange={handleContentChange}></textarea>
        </label>
        <br />
        <button type="button" onClick={handleCreateBlog}>
          Créer le Blog
        </button>
      </form>
    </div>
  );
};

export default Blog;
