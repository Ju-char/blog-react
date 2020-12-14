import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

import './styles.css';
import _categories from 'src/data/categories';
import _posts from 'src/data/posts';
import posts from '../../data/posts';
import { postsForRoute } from 'src/data/selectors/posts';

const App = () => {
  const [categories, setCategories] = useState(_categories);
  const [posts, setPosts] = useState(_posts);

  return <div className="blog">
    <Header categories={categories} />

    {
      categories.map(category => {
        return <Route key={category.route} exact path={category.route}>
          <Posts
            posts={postsForRoute(category.route, category.label)}
            title={category.label}
          />
        </Route>
      })
    }

    <Footer />
  </div>
};

export default App;
