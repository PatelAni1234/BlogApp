import { useState, useEffect } from "react";


import BlogList from "./BlogList";
import useFetch from "./usefetch";
const Home = () => {
  const { data:blogs, loading, error } = useFetch(" http://localhost:8000/blogs");
   //  const [name, setName] = useState("mario");
  //   const [age  , setAge] =useState("10");

  //there are different ypes of hooks inreact use state is one of them and other is useEffect

  //to trnafer the below data to navbar.js we will use props so basiccaly props are used to tranfer parent component to child
  

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  //    we use hook start becsuse whrn we wnat to re render somthing on any event
  // target is one of the properties of e object
  // console.log("hello  , ninjas" , e.target);

  //   setName("luigi");
  //   setAge("30")

  //   };
  //   const handleClickagain = (name, e) => {
  //     console.log("Hello " + name, e.target);
  //   };

  //empty array can be passed as a second argument in order to run the only at initial start not at any render
  //but if you specifically want to run the function you can pass it as an argument inside in the array example of an name given below
  // useEffect(() => {
  //   console.log("use effect run");
  //   console.log(name);
  // }, [name]);

 

  return (
    <div className="home">
      {/* <h1>HomePage</h1> */}
      {!error && <div>{error}</div>}
      {loading && <div>Loading Please wait.....</div>}

      {blogs  && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <buton onClick={() => setName("aniruddha")}>Test</buton> */}
      {/* we can use the filters in order to use data in a different way in below we are using only those blogs in which the author is a specific person */}
      {/* <BlogList blogs={blogs.filter((x)=> x.author === 'aniruddha')} title="Aniruddha's Blog!" handleDelete={handleDelete}/> */}

      {/* we can not use handleclick() inside the onclick as it will automatically fires the value at beginingg */}
      {/* <p>{name} is {age} years old</p> 
      <button onClick={handleClick}>Click me</button> */}

      {/* but when we want to pass the arguments inside the function inthat case we use anonymous function to prevent from auto invoke of the function in the  beggning */}
      {/* <button onClick={(e)=>{
                // anonymous function created
                handleClickagain("mario" , e);
            }}>Click me again</button> */}
    </div>
  );
};

export default Home;
