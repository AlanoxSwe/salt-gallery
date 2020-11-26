import React, { useState, useEffect, useContext } from 'react';

// components
import Search from '../../components/common/Search';
import CardDeck from '../../components/CardDeck';
import Pagination from '../../components/common/Pagination';

// Helpers
import services from '../../services';
import SearchContext from '../../context/SearchContext';

const SearchPage = ({ match, history }) => {
  const {
    searchVal, onChange, setSearchVal, setCategory,
  } = useContext(SearchContext);

  const { category } = match.params;

  const [images, setImages] = useState([]);
  const [page, setPage] = useState({ current: 1, prev: null, next: null });

  const fetchImages = async pageNumber => {
    const data = await services.image.getImages(category, pageNumber);
    if (data) {
      const {
        images: imagesData, currentPage, next, prev,
      } = data;
      setImages(imagesData);
      setPage({ current: currentPage, prev, next });
      setSearchVal(category);
      setCategory(category);
      localStorage.setItem('lastSearch', category);

      return window.scrollTo(0, 0);
    }

    return history.replace('/404');
  };

  const onSubmit = e => {
    e.preventDefault();
    return history.push(searchVal);
  };

  const onPrev = prevPage => setPage({ ...page, current: prevPage || 1 });
  const onNext = nextPage => setPage({ ...page, current: nextPage || 1 });

  useEffect(() => {
    fetchImages(1);
  }, [category]);
  useEffect(() => fetchImages(page.current), [page.current]);

  return (
    <div>
      <Search onChange={e => onChange(e)} onSubmit={e => onSubmit(e)} searchVal={searchVal} />
      <CardDeck items={images} />
      {images.length
        ? (
          <Pagination
            onPrev={() => onPrev(page.prev)}
            onNext={() => onNext(page.next)}
            prev={page.prev}
            next={page.next} />
        )
        : null}
    </div>
  );
};

export default SearchPage;
