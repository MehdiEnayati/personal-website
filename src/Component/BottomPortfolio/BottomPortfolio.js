import React, {useState} from "react";

import './BottomPortfolio.css'

export default function BottomPortfolio({btnCategory, filterMenus}) {

    const [mainPortfolio, setMainPortfolio] = useState("همه")

    return (
        <div className="btn-container">
            {
                btnCategory.map((p, index) => (
                    <button
                        key={index}
                        className={p === mainPortfolio ? "btn-portfolio hightlight" : "btn-portfolio"}
                        onClick={() => {
                            setMainPortfolio(p)
                            filterMenus(p)
                        }}
                    >
                        {p}
                    </button>
                ))
            }
        </div>
    )
}