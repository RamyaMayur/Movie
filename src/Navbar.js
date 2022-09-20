import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
      <div className="nav-content">
        <h1>Zen movies</h1>
        <div>
        <Link to="/">Home</Link>
        <Link to="/addMovie">Add new movie</Link>
        </div>
      </div>
    );
}
 
export default Navbar;