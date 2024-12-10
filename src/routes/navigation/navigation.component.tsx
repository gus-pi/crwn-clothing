import { Link, Outlet } from 'react-router-dom';
import CrwnLogo from '../../assets/crown.svg';

import './navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} className="logo" alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
