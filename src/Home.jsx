import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'my new website',
      body: 'lorem ipsum ...',
      author: 'saddik',
      id: '1',
    },
    {
      title: 'the web effect',
      body: 'lorem ipsum ...',
      author: 'samira',
      id: '2',
    },
    {
      title: 'the dev tips',
      body: 'lorem ipsum ...',
      author: 'paris',
      id: '3',
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  });
  
  return (
    <div className='home'>
      <BlogList blogs={blogs} title='all blogs!' handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'saddik')}
        title='sadiques blogs!'
      />
    </div>
  );
};

export default Home;
