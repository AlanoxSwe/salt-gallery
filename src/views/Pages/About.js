import React from 'react';
import '../../styles/about.scss';
import {
  title, organization, image, bio, copyright,
} from '../../data/about.json';

const About = () => (
  <article className="about">
    <h1>{title}</h1>
    <h2>{organization}</h2>
    <figure className="about-split">
      <img src={image} alt={title} draggable="false" />
      <p>
        {bio.map(paragraph => <span className="about-paragraph">{paragraph}</span>)}
      </p>
    </figure>
    <hr />
    <p className="about-footer">
      &copy;
      {' '}
      {copyright}
    </p>
  </article>
);

export default About;
