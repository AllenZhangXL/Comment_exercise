import React, { Component } from "react";
import CommentInput from "./ComomentInput";
import CommentList from "./CommentList";

class CommentApp extends Component {
  handleSubmitComment(comment) {
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments
    });
  }

  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
