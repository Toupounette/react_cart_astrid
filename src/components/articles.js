import React, { Component } from "react";

import Article from "./article";

class ArticlesList extends Component {
  handleReset = () =>{
    const items = this.props.articlesList.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
    this.props.onChange();
  }
  handleDelete = article  =>{
    var localArticles = this.props.articlesList;
    var articleIndex = localArticles.indexOf(article);
    localArticles[articleIndex].value = 0;
    this.setState({ articlesList: localArticles });
    this.props.onChange();
  }
  handleIncrement = article =>{
    var localArticles = this.props.articlesList;
    var articleIndex = localArticles.indexOf(article);
    localArticles[articleIndex].value++;
    this.setState({ articlesList: localArticles });
    this.props.onChange();
  }
  handleDecrement = article =>{
    var localArticles = this.props.articlesList;
    var articleIndex = localArticles.indexOf(article);
    if( localArticles[articleIndex].value > 0 ){
      localArticles[articleIndex].value--;
    }
    this.setState({ articlesList: localArticles });
    this.props.onChange();
  }
  render() {
      console.log("ArticlesList - rendered");
      return (
          <div>

            {this.props.articlesList.map((article) => (
            <Article
              key={article.id}
              onDelete={this.handleDelete}
              article={article}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          ))}


        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>

      </div>
    );
  }
}

export default ArticlesList;