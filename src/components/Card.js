import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/card.scss';

const Card = ({
  url, username, name, tags, instaLink,
}) => (
  <article className="card">
    <div className="card-body">
      <div className="card-front">
        <img src={url} alt="salt-gallery" />
      </div>
      <div className="card-back">
        <span className="flag flag-title">{ name }</span>
        {username && (
          <a href={instaLink} target="_">
            <span className="flag flag-social">
              <i className="fab fa-instagram" />
              {' @'}
              { username }
            </span>
          </a>
        )}
        <div className="flag flag-tags">
          {tags.map(tag => (<Link key={tag} to={`/search/${tag}`}><span className="flag-tag">{ tag }</span></Link>))}
        </div>
      </div>
    </div>
  </article>
);

export default Card;
