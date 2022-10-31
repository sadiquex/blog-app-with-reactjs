import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }

          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setLoading(false); // do not show loading message after data is fetched
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
  
};

export default useFetch;
