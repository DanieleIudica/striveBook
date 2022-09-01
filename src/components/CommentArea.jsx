// Aggiungi un componente CommentArea alla fine del tuo SingleBook. Quando l’untente cliccherà su un SingleBook, i commenti dovranno apparire (suggerimento: short-circuit operator!).

import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import Error from "./Error";
import Loading from "./Loading";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/commentsttt/" + this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYjhmNzVlODE3MTAwMTU1YjM1NDUiLCJpYXQiOjE2NjIwNDAzMTIsImV4cCI6MTY2MzI0OTkxMn0.BSOYDJsfystTA775aYYd-XO7rSgTjmpMT3sB5xFhGCo",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ comments: data, loading: false, error: false });
      } else {
        alert("something went wrong");
        this.setState({ loading: false, error: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loading />}
        {this.state.error && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentsList commentList={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
