import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from "./components/WarningSign";
// import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    asin: null,
  };

  setAsin = (value) => {
    this.setState({ asin: value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <WarningSign text="Watch out again!" />
            <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          <Row>
            <Col>
              <BookList books={fantasyBooks} setAsin={this.setAsin} asin={this.state.asin} />
            </Col>
            <Col xs={6}>
              {this.state.asin ? (
                <CommentArea asin={this.state.asin} />
              ) : (
                <h2 className="mt-5 text-danger">Selezionare un libro</h2>
              )}
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default App;
