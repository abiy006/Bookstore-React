import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

export default function NavigationHeader() {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <div>
          <div>
            <h1>Bookstore CMS</h1>
            <span className="nav-link"><NavLink to="/">BOOKS</NavLink></span>
            <span className="nav-link"><NavLink to="/categories">CATEGORIES</NavLink></span>
          </div>
          <div className="profile-div">
            <PersonIcon className="profile-icon" />
          </div>
        </div>
      </nav>
    </header>
  );
}
