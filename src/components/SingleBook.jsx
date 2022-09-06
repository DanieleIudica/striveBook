import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // };
  let [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => {
          // this.setState({ selected: !selected });
          setSelected({ selected: !selected });
          props.setAsin(props.book.asin);
        }}
        style={{ border: props.asin === props.book.asin ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>

      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
