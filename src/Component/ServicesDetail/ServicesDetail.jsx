import React from "react";

import "./ServicesDetail.css"

export default function ServicesDetail({img, title, text}) {
    return (
        <div className="services-detail">
            <div className="services-detail-img">
                <img src={img} alt=""/>
            </div>
            <h4 className="services-detail-title">{title}</h4>
            <p className="services-detail-text">{text}</p>
        </div>
    )
}