import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setLoading(false); // do not show loading message after data is fetched
        });
    }, 1000);
  }, []);

  return (
    <div className='home'>
      {isLoading && <div>Loading...</div>}

      {blogs && <BlogList blogs={blogs} title='all blogs!' />}
    </div>
  );
};

export default Home;
