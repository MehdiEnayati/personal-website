import React from "react";

import './CustomerCommentDetail.css'

export default function CustomerCommentDetail({img, title, nameCompany, textComment}) {
    return (
        <div className="customers-comment-detail">
            <div className="person-profile">
                <img src={img} alt=""/>
                <div>
                    <h5 className="person-name">{title}</h5>
                    <span className="company-name">{nameCompany}</span>
                </div>
            </div>
            <div className="text-comment">
                <p>{textComment}</p>
            </div>
        </div>
    )
}