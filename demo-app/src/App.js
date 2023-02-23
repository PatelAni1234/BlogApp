import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router , Route ,Switch } from 'react-router-dom';
import Create from "./Create"
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  // const title="welcome to the new blog";
  // const count = 100;
  // const person={ name:'ani' , age:10};
  // const arr=[1,2,3,4,5];
  // const link = "http://www.google.com";
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/Blogs/:id">
              <BlogDetails/>
            </Route>
            {/* if none of the upper routes match it will redirect you to the lowest route */}
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          {/* curly braces are use to oputup the dynamic values orr varibles inside jsx */}
          {/* <h1>{title}</h1> */}
          {/* <h1>{arr}</h1> */}
          {/* you can nnot ouput an object in javascript */}
          {/* <h1>{person}</h1> */}
          {/* <h1>total likes are {count}</h1>
        <h1>APP Component</h1> */}
          {/* you can also use the dynamic values directly inside the curly brakets */}
          {/* <p>{Math.random() * 4}</p>
        <a href={link} target="_blank">Click here</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
