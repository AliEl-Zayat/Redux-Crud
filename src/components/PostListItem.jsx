import { Button, ButtonGroup } from "react-bootstrap";
const PostListItem = ({ data }) => {
  const records = data.map((post, idx) => (
    <tr key={post.id}>
      <td>#{++idx}</td>
      <td>{post.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};
export default PostListItem;
