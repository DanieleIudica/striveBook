import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  // };
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className="text-success mt-5">
              <h2>Search</h2>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery({ searchQuery: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {props.books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((b) => (
            <Col md={4} xs={12} key={b.asin}>
              <SingleBook book={b} setAsin={props.setAsin} asin={props.asin} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
