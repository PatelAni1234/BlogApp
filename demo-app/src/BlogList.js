import {Link} from "react-router-dom";
const BlogList = ({blogs , title }) => {
    // you can use the above destructuring or can replace the arguments by props ans use below to lines to acces title and blogs
    //props are used to import the components from parent element to child element 
    //const blogs =props.blogs;
    //const title=props.title;
    
    
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}> 
          <h2>{blog.title}</h2>
          <p>It's written by {blog.author}</p>

          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
