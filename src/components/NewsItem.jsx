import React from "react";

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{ width: "18rem" }}>
            <img
                src={src ? src : "https://via.placeholder.com/360x200.png?text=No+Image"}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
                className="card-img-top"
                alt="News"
            />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
                <p className="card-text">{description ? description.slice(0, 100) : "No Description Available"}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            </div>
        </div>
    );
};

export default NewsItem;
