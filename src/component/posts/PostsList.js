function PostList(props) {
  return (
    <ul>
      {props.posts.map(post => {
        console.log(post);
      })}
    </ul>
  );
}

export default PostList;
