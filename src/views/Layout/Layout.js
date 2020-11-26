import React, { useEffect, useState } from 'react';
import randomWords from 'random-words';
import Header from '../../components/Header';
import SearchContext from '../../context/SearchContext';

// Helpers
import moveEye from '../../helpers/moveEye';

const Layout = ({ children }) => {
  const [localSearch, setLocalSearch] = useState(localStorage.getItem('lastSearch'));

  const lastSearch = localSearch || randomWords();

  const [category, setCategory] = useState(null);
  const [searchVal, setSearchVal] = useState(lastSearch);

  const handleOnChange = e => setSearchVal(e.currentTarget.value);

  useEffect(() => {
    setLocalSearch(localStorage.getItem('lastSearch'));
  }, [category]);

  const onMouseMove = e => {
    const eyeballs = document.querySelector('.face').children;
    const leftEyeball = eyeballs[1];
    const rightEyeball = eyeballs[2];

    moveEye(leftEyeball, e.pageX, e.pageY);
    moveEye(rightEyeball, e.pageX, e.pageY);
  };

  return (
    <SearchContext.Provider value={{
      searchVal, lastSearch, category, onChange: handleOnChange, setSearchVal, setCategory,
    }}>
      <div onMouseMove={e => onMouseMove(e)}>
        <Header />
        {children}
      </div>
    </SearchContext.Provider>
  );
};

export default Layout;
