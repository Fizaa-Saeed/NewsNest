import React, { Component } from "react";

export class NewsItem extends Component 
{
  render()
   {
    let { title, description, imageUrl, newsUrl,} = this.props;

    return (
      <div>
        <div className="card h-100">
          <img
            src={
              imageUrl && imageUrl !== "null"
                ? imageUrl
                : "https://images.pexels.com/photos/18287623/pexels-photo-18287623/free-photo-of-close-up-of-newspapers-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            className="card-img-top"
            alt="news"
            style={{ height: "200px", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              {title
                ? title.slice(0, 50) + (title.length > 50 ? "..." : "")
                : "No title available"}
            </h5>

            <p className="card-text">
              {description
                ? description.slice(0, 66) +
                  (description.length > 66 ? "..." : "")
                : "No description available"}
            </p>

            <div className="mt-auto">
<a
  href={newsUrl}
  target="_blank"
  rel="noreferrer"
  className="btn btn-sm btn-brown"
>
  Read More
</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
