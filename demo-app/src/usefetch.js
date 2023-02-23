import { useState, useEffect } from "react";
//if you are creating an custom hook alsways remember that the name should start the name use
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setisloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont =new AbortController();
    setTimeout(() => {
      fetch(url ,{signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not load the message for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setdata(data);
          setisloading(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'Abort Error'){
            console.log('fetch Aborted')
          }
          else{
            
             setError(err.message);
              setisloading(false);

          }
         
        });
    },0);
    return() => abortCont.abort();
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
