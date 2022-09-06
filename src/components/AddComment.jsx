// AddComment contiene un form per aggiungere il testo del commento e il voto(da 1 o a 5). Questo componente dovrà permettere all’utente di fare la POST del nuovo commento sul libro selezionato.

import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: null,
  //   },
  // }
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     })
  //   }
  // }
  useEffect(() => {
    console.log("COMPONENTDIDUPDATE");
    // setComment("elementId", props.asin);
    handleChange("elementId", props.asin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE",
        },
      });
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  const handleChange = (propertyName, propertyValue) => {
    setComment({
      ...comment,
      [propertyName]: propertyValue,
    });
  };

  return (
    <div>
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label className="text-success mt-5">Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     comment: e.target.value,
              //   },
              // })
              handleChange("comment", e.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-success">Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     rate: e.target.value,
              //   },
              // })
              handleChange("rate", e.target.value)
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit" className="mb-5">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
