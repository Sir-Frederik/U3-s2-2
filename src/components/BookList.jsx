import { Component } from "react";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBookAsin: "",
  };
  changeAsin = (asin) => this.setState({ selectedBookAsin: asin });

  render() {
    return (
      <Container fluid>
        <h2>Libri Disponibili</h2>

        <FormControl
          className="w-50 my-4"
          type="text"
          placeholder="Cerca un titolo di un libro"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <Row>
          <Col md={8}>
            {" "}
            <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-*">
              {this.props.genre
                .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                .map((book) => (
                  <SingleBook key={book.asin} book={book} changeAsin={this.changeAsin} />
                ))}
            </Row>{" "}
          </Col>
          <Col md={4}>
            <CommentArea id={this.state.selectedBookAsin} />
          </Col>{" "}
        </Row>
      </Container>
    );
  }
}

export default BookList;
