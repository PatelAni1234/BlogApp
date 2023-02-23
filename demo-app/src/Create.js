import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('pradhyuman');
  const[ispending ,setisPending] = useState(false);
  const history=useHistory();
  
  const handleSubmit = (e)=>{
        e.preventDefault();
        const blog={title ,body ,author};
        setisPending(true);

        fetch('http://localhost:8000/blogs' , {
          method:'POST' ,
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(blog)
        }).then(()=>{
          setisPending(false);
          //  history.go(-1);
          history.push('/');
    })
    
  }
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="aniruddha">aniruddha</option>
          <option value="pradhyuman">pradhyuman</option>
          <option value="ashvin">ashvin</option>
          <option value="vedant">vedant</option>
        </select>
        {!ispending && <input className="sub" type="submit" value="Add Blog" />}
        {ispending && <input className="sub" type="submit" value="Loading..." />}
      </form>
    </div>
  );
};

export default Create;
