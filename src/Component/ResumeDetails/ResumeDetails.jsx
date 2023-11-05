import React from "react";

import "./ResumeDetails.css"

export default function ResumeDetails({title, year, nameCompany, text}) {
    return (
        <div className="resume-details">
            <h2 className="resume-detail-title">{title}</h2>
            <div>
                <span className="resume-detail-year">{year}</span>
                <span className="resume-detail-name">{nameCompany}</span>
            </div>
            <p>{text}</p>
        </div>
    )
}