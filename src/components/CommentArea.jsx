// Aggiungi un componente CommentArea alla fine del tuo SingleBook. Quando l’untente cliccherà su un SingleBook, i commenti dovranno apparire (suggerimento: short-circuit operator!).

import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import Error from "./Error";
import Loading from "./Loading";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   loading: true,
  //   error: false,
  // };
  let [comments, setComments] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  // componentDidMount() {
  //   this.fetchComments();
  // }
  useEffect(() => {
    console.log("componentDidMount chiamato");
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
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
        // this.setState({ comments: data, loading: false, error: false });
        setComments(data);
        setLoading(false);
        setError(false);
      } else {
        alert("something went wrong");
        // this.setState({ loading: false, error: true });
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.log(error);
      // this.setState({ loading: false, error: true });
      setLoading(false);
      setError(true);
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps !== this.props) {
  //     this.fetchComments();
  //   }
  // }
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  return (
    <div className="w-75">
      {loading && <Loading />}
      {error && <Error />}
      <AddComment asin={props.asin} />
      <CommentsList commentList={comments} />
    </div>
  );
};

export default CommentArea;
