import {Link} from 'react-router-dom';

const NavBarLinks = (props) => {

  return (
    <ul className={`navbar-links ${props.isMobile ? 'mobile' : ''}`}>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/top_rated">Top Rated</Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/trending">Trending</Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/upcoming">Upcoming</Link>
      </li>
    </ul>
  )
}
 
export default NavBarLinks;