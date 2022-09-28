import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {
        items.map((c) => (
          <li key={c.id}>
            <p>{c.text}</p>
            <div>
              By <address>{c.name}</address>
            </div>
          </li>
        ))
      }
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
