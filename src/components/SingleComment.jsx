import { Button, ListGroup } from "react-bootstrap";

// Ogni commento sarà sempre un componente SingleComment.
const SingleComment = (props) => {
  const deleteComment = async (id) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE",
        },
      });
      if (response.ok) {
        alert("comment deleted!");
      } else {
        alert("comment NOT deleted!");
      }
    } catch (error) {
      alert("comment NOT deleted!");
    }
  };

  return (
    <ListGroup.Item style={{ color: "black" }} className="mb-3 d-flex justify-content-between">
      {props.comment.comment}
      <Button variant="danger" className="ml-2" onClick={() => deleteComment(props.comment._id)}>
        <i className="bi bi-trash3"></i>
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
