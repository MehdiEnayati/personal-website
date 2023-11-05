import React from "react";

import "./PriceDetail.css";

export default function PriceDetail({title, price, month, desc1, desc2, desc3}) {
    return (
        <div className="price-detail">
            <h6>{title}</h6>
            <h3>{price}</h3>
            <h6>تومان</h6>
            <span>{month}</span>
            <button>امتحان کنید</button>
            <p>{desc1}</p>
            <p>{desc2}</p>
            <p>{desc3}</p>
        </div>
    )
}