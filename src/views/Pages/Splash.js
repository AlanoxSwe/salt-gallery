import React, { useContext } from 'react';
import Search from '../../components/common/Search';
import '../../styles/splash.scss';

import SearchContext from '../../context/SearchContext';

const Splash = ({ history }) => {
  const { searchVal, onChange } = useContext(SearchContext);
  const onSubmit = e => {
    e.preventDefault();
    return history.push(`search/${searchVal}`);
  };

  return (
    <div className="splash-wrapper">
      <h1 className="splash-h1">Welcome to Salt Gallery</h1>
      <div className="search">
        <Search onChange={e => onChange(e)} onSubmit={e => onSubmit(e)} />
      </div>
      <div className="circle" />
    </div>
  );
};

export default Splash;
