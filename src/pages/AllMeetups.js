import MeetupList from '../component/meetups/MeetupList';
import { useState } from 'react';

// All meetups Page
function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  fetch(
    'https://react-first-project-94078-default-rtdb.firebaseio.com/meetups.json'
  )
    .then(res => res.json())
    .then(data => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUpsPage;
