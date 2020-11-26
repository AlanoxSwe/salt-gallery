import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import images from '../assets/images';
import SearchContext from '../context/SearchContext';

const Header = () => {
  const { lastSearch } = useContext(SearchContext);
  return (
    <header>
      <Link to={`/search/${lastSearch}`}>
        <div>
          {lastSearch}
        </div>
      </Link>
      <Link to="/">
        <div className="face">
          <img src={images.face} alt="Logo" />
          <div className="iris iris-left">
            <div />
          </div>
          <div className="iris iris-right">
            <div />
          </div>
        </div>
      </Link>
      <Link to="/about">
        <div>
          About
        </div>
      </Link>
    </header>
  );
};

export default Header;
