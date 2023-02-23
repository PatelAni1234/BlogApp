import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      
      <h2>The dojo block</h2>
      <div className="navbar2">
        <Link to="/">HOME</Link>
        <Link to="/create">NEW BLOG</Link>
      </div>
    </div>
  );
};
export default Navbar;
