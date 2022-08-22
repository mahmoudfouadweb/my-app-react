import { useEffect, useState } from 'react';
import PostList from '../component/Posts/PostsList';

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/posts.json'
    )
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
      });
  });
  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
  return (
    <section>
      <h1>Home</h1>
      <PostList posts={DUMMY_DATA} />
    </section>
  );
}

export default HomePage;
