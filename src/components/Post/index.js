import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default ({ title, excerpt, category }) => (
  <article className="post">
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p className="post-excerpt">{excerpt}</p>
  </article>
);
