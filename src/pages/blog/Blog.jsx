import React, {useEffect, useState} from "react";
import BlogName from "../../Component/BlogName/BlogName";
import articles from "../../dataArticles";

import './Blog.css'

export default function Blog() {

    const [allArticles, setAllArticles] = useState(articles)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main">
            <div className="top-page">
                <h2 className="title-page">بلاگ</h2>
            </div>
            <div className="bottom-page">
                <div className="blog">
                    <BlogName articles={allArticles}/>
                </div>
            </div>
        </div>
    )
}