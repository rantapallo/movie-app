import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

const Navbar = () => {

  return ( 
    <nav className="navbar">
      <div className="navbar-topic">
        <Link to="/"><h1>UMDb</h1></Link>
      </div>
      <Navigation />
      <NavigationMobile />
    </nav>
  )
}

export default Navbar