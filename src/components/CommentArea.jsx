import { Component } from "react";
import CommentsList from "./CommentsList";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI2MjIyYjFlYmU4MjAwMTUwOWYzNzciLCJpYXQiOjE3NDczMjk1ODAsImV4cCI6MTc0ODUzOTE4MH0.gpPi8dByz-QvYcsX-AurC0_k6BO-cePZgsOj1vQ3guk",
      },
    });
    if (response.ok) {
      const comments = await response.json();
      //   console.log(comments);
      this.setState({ comments });
      // scritto comments una sola volta xkè omonime. altrimenti:" comments: comments"
    }
  };
  //cancello percè non deve più avviarsi ogni volta in automatico, ma quando lo stato cambia:
  /*   componentDidMount() {
    this.fetchComments();
  } */
  componentDidUpdate(prevProps, prevState) {
    console.log("si è aggiornato");
    if (prevProps.id !== this.props.id) {
      console.log("id cambiato");
      this.fetchComments();
    }
  }
  render() {
    return (
      <div>
        <h6 className="mt-2">Commenti : </h6>
        {this.props.id ? (
          <>
            <CommentsList comments={this.state.comments} />
            {"  "}
          </>
        ) : (
          <Alert variant="light"> Clicca una card per visualizzare i commenti</Alert>
        )}
      </div>
    );
  }
}
export default CommentArea;
