import MeetupList from '../component/meetups/MeetupList';
import { useState, useEffect } from 'react';

// All meetups Page
function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/meetups.json'
    )
      .then(res => res.json())
      .then(data => {
        const meetups = [];

        Object.keys(data).forEach(key => {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        });
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

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
