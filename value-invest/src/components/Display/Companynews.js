import React from "react";

export const Companynews = props => (
  <div className="company-news">
    <h3>Company News</h3>
      {props.companyNews.map(news => (
        <ul className="news-list" key={news.url}>
            <li className="description-item-title"><a href={news.url} target="_blank"><strong className="title-info">{news.headline}</strong></a></li>
            <li className="description-item-news"><strong className="summary-info">Summary</strong>{news.summary}</li>
            <li className="description-item-source">{news.source}</li>
        </ul>
      ))
      }
  </div>
);
