import NewMeetupForm from '../component/meetups/NewMeetupForm';

function NewMeetupPage() {
  function NewMeetupData(meetup) {
    console.log('meetup from: ', meetup);
  }
  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={NewMeetupData} />
    </section>
  );
}

export default NewMeetupPage;
