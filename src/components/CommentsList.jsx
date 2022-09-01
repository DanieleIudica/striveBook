import { Component } from "react";
import { ListGroup } from "react-bootstrap";

// CommentsList avrà all’interno una lista di commenti riguardo il libro selezionato, l’array di commenti verrà passato come prop dal componente CommentArea. Ogni commento sarà sempre un componente SingleComment.
class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.list.map((comment) => (
          <ListGroup.Item style={{ color: "black" }} key={comment._id}>
            {comment.author} - {comment.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
