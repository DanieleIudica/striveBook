// AddComment contiene un form per aggiungere il testo del commento e il voto(da 1 o a 5). Questo componente dovrà permettere all’utente di fare la POST del nuovo commento sul libro selezionato.
import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYjhmNzVlODE3MTAwMTU1YjM1NDUiLCJpYXQiOjE2NjIwNDAzMTIsImV4cCI6MTY2MzI0OTkxMn0.BSOYDJsfystTA775aYYd-XO7rSgTjmpMT3sB5xFhGCo",
        },
      });
      if (resp.ok) {
        alert("commento inviato");
      } else {
        console.log("error");
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.sendComment}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Inserisci commento</Form.Label>
          <Form.Control
            type="text"
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Metti un voto</Form.Label>
          <Form.Control
            as="select"
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="secondary" type="submit" className="mb-3">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
