import React, { Component } from "react";

class Article extends Component {
  componentWillUnmount() {
    console.log("Article - componentWillUnMount");
  }

  render() {
   console.log("Article - rendered");

    return (
      <div>
        <span className={this.getClasses()}>{this.props.article.value}</span>

        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onDecrement(this.props.article)}
        >
          -
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onIncrement(this.props.article)}
        >
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.article)}
          className="btn btn-danger btn-sm m2"
        >
          X
        </button>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.article.value === 0 ? "warning" : "secondary";
    return classes;
  }
}

export default Article;