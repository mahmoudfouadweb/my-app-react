import PostItem from './PostItem';
import classes from './PostList.module.css';
function PostList(props) {
  console.log(props);
  return (
    <ul className={classes.list}>
      {props.posts.map(post => {
        console.log(post);
        return (
          <PostItem
            key={post.id}
            id={post.id}
            image={post.image}
            name={post.name}
            address={post.address}
            description={post.description}
          />
        );
      })}
    </ul>
  );
}

export default PostList;
