import React from "react";
import {Link} from "react-router-dom";

import './BlogName.css'

export default function BlogName({articles}) {

    return (
        <>
            {
                articles.map(article => (
                    <div className="blog-card" key={article.id}>
                        <Link to={`${article.id}`}>
                            <div className="blog-img">
                                <img src={article.img} alt="blog_post_1.jpg"/>
                                <div className="hover-img">
                                    <i className="fa-regular fa-file"></i>
                                </div>
                                <div className="post-date">
                                    <span className="day">{article.day}</span>
                                    <span className="month">{article.month}</span>
                                </div>
                            </div>
                        </Link>
                        <div className="post-info">
                            <h6 className="post-info-title">{article.title}</h6>
                            <h2 className="post-info-dec">{article.postInfoDec}</h2>
                        </div>
                    </div>
                ))
            }
        </>
    )
}