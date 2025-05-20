import { useState } from "react";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = function ({ genre }) {
  /* state = {
    searchQuery: "",
    selectedBookAsin: "",
  }; */
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedBookAsin, setSelectedBookAsin] = useState("");

  const changeAsin = (asin) => setSelectedBookAsin(asin);

  return (
    <Container fluid>
      <h2>Libri Disponibili</h2>

      <FormControl
        className="w-50 my-4"
        type="text"
        placeholder="Cerca un titolo di un libro"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Row>
        <Col md={8}>
          {" "}
          <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-*">
            {genre
              .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((book) => (
                <SingleBook key={book.asin} book={book} changeAsin={changeAsin} />
              ))}
          </Row>{" "}
        </Col>
        <Col md={4}>
          <CommentArea id={selectedBookAsin} />
        </Col>{" "}
      </Row>
    </Container>
  );
};

export default BookList;
