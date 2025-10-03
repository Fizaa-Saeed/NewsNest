import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews(page) {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=55b7abbde4f84801a35d8e612db57799&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: page,
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
    });
  }

  componentDidMount() {
    this.updateNews(1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.updateNews(1); // reload when category changes
    }
  }

  handlePrevClick = () => {
    this.updateNews(this.state.page - 1);
  };

  handleNextClick = () => {
    if (!(this.state.page + 1 > this.state.totalResults / this.props.pageSize)) {
      this.updateNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-5">
        <h2 style={{ textAlign: "center" }}>
          NewsNest - Top {this.props.category} Headlines
        </h2>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => (
              <div className="col-md-4 my-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          ) : (
            !this.state.loading && <p className="text-center">No articles available.</p>
          )}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-brown"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-brown"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
