import React, { Component } from "react";
import ArticlesList from "./components/articles";
import NavBar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    console.log("App - mounted");
  }

  state = {
    totalArticlesList:0,
    articlesList: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ],
  };

  handleChange = () =>{
    this.setState(
      {
        totalArticlesList: this.state.articlesList.filter( article => article.value > 0 ).length, 
        articlesList: this.state.articlesList 
        }
      );    
  }

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalArticlesList={ this.state.totalArticlesList }
        ></NavBar>

        <main className="container">
          <ArticlesList
            articlesList={this.state.articlesList}

            onChange={this.handleChange}
          ></ArticlesList>
        </main>
      </React.Fragment>
    );
  }
}

export default App;