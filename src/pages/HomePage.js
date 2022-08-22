import { useEffect, useState } from 'react';
import PostList from '../component/Posts/PostsList';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/posts.json'
    )
      .then(res => res.json())
      .then(data => {
        const postsData = [];
        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };
          postsData.push(post);
        }
        setIsLoading(false);
        setLoadedPosts(postsData);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <h1>Loading</h1>;
  } else {
    content = <PostList posts={loadedPosts} />;
  }
  return (
    <section>
      <h1>Home</h1>
    </section>
  );
}

export default HomePage;
