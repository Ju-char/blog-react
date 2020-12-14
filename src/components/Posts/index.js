import React from 'react';

import Post from 'src/components/Post';

import './styles.scss';

export default ({ posts, title }) => {
  return (
    <main className="posts">
      <h1 className="posts-title">{title}</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
