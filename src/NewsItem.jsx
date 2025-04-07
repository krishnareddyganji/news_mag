import React from 'react';
import './NewsItem.css'; // Make sure the path is correct and file exists

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="news-card">
            <img src={src || "https://via.placeholder.com/300x200"} alt="news" className="news-image" />
            <div className="news-content">
                <h5>{title}</h5>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

export default NewsItem;
