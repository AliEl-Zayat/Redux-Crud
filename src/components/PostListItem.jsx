import { Button, ButtonGroup } from "react-bootstrap";
const PostListItem = ({ data, deleteRecord }) => {
  const deleteHandler = (item) => {
    if (window.confirm(`are you sure you want to delete ${item.title} ?`))
      deleteRecord(item.id);
  };
  const records = data.map((post, idx) => (
    <tr key={post.id}>
      <td>#{++idx}</td>
      <td>{post.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={() => deleteHandler(post)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};
export default PostListItem;
