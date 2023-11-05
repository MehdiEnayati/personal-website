import React, {useEffect, useState} from "react";
import BottomPortfolio from "../../Component/BottomPortfolio/BottomPortfolio";
import Menu from "../../Component/PortfolioItem/PortfolioItem";
import menus from "../../dataPortfolio";

import './Portfolio.css';

const allCategory = ['همه', ...new Set(menus.map(menu => menu.category))]
export default function Portfolio() {

    const [category, setCategory] = useState(allCategory)
    const [allMenus, setAllMenus] = useState(menus)


    const filterMenus = (category) => {
        if (category === 'همه') {
            setAllMenus(menus)
            return
        }
        let filteredMenus = menus.filter(menu => menu.category === category)
        setAllMenus(filteredMenus)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="main">
                <div className="top-page">
                    <h2 className="title-page">نمونه کارها</h2>
                </div>
                <div className="bottom-page">
                    <div className="header-portfolio">
                        <BottomPortfolio btnCategory={category} filterMenus={filterMenus}/>
                    </div>
                    <div className="portfolio-items">
                        <Menu category={category} allMenus={allMenus}/>
                    </div>
                </div>
            </div>
        </>
    )
}