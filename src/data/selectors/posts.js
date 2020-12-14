import _posts from 'src/data/posts';

// Cette fonction sert à "sélectionner" des données.
// => on appelle ce genre de fonction utilitaire des "selectors".
export const postsForRoute = (route, label) => {
  let posts;
  if (route === '/') posts = _posts;
  else {
    posts = _posts.filter(p => p.category === label);
  }
  return posts;
};
