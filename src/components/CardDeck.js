/* eslint-disable */
import React from 'react';

import Card from './Card';

import '../styles/cardDeck.scss';

const CardDeck = ({ items }) => (
  <div className="cards">
    {items.map(({ url, author, tags }, index) => {
      const username = author.instagram ? author.instagram.username : null;
      const instaLink = author.instagram ? author.instagram.url : null;
      return (<Card key={`${index}-${author.name}`} url={url} username={username} name={author.name} tags={tags} instaLink={instaLink} />);
    })
  }
  </div>
);
export default CardDeck;
