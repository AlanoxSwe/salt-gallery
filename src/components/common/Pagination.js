import React from 'react';

const Pagination = ({
  onPrev, onNext, prev, next,
}) => (
  <nav className="buttons">
    <button type="button" id="prev-btn" disabled={!prev} onClick={() => onPrev()}>Prev</button>
    <button type="button" id="next-btn" disabled={!next} onClick={() => onNext()}>Next</button>
  </nav>
);

export default Pagination;
