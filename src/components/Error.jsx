import { Component } from "react";
import { Alert } from "react-bootstrap";

class Error extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <Alert variant="danger">messaggio di errore</Alert>
      </div>
    );
  }
}

export default Error;
