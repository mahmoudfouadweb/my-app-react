import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../component/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();
  function NewMeetupData(meetup) {
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => history.replace('/'));
    console.log('meetup from: ', meetup);
    console.log(meetup.title);
    console.log(Object.keys(meetup).length);
  }
  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm meetupObj={NewMeetupData} />
    </section>
  );
}

export default NewMeetupPage;
