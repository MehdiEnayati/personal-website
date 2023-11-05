import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import ModalClose from "../ModalClose/ModalClose";

import './Header.css'

export default function Header() {

    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const [scrollHeader, setScrollHeader] = useState(false)

    const scrolling = () => {
        if (window.scrollY) {
            setScrollHeader(true)
        } else {
            setScrollHeader(false)
        }
    }

    window.addEventListener('scroll', scrolling)

    return (
        <>
            <header className={`${scrollHeader ? 'header scrolling' : 'header'}`}>
                <div className="mobile-site-header">
                    <div className="mobile-site-header-title">
                        <h2>
                            مهدی
                            <span> عنایتی</span>
                        </h2>
                    </div>
                    <div className="mobile-site-header-icon">
                        <GiHamburgerMenu onClick={() => setIsShowSidebar(!isShowSidebar)}/>
                    </div>
                    <div className="desktop-site">
                        <div>
                            <NavLink to="/">
                                خانه
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/resume">
                                رزومه
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/services">
                                خدمات
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/portfolio">
                                نمونه کارها
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/blog">
                                بلاگ
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/contact">
                                تماس
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={`sidebar-header ${isShowSidebar ? 'sidebar-header-active' : ''}`}>
                    <div>
                        <NavLink to="/" onClick={() => setIsShowSidebar(false)}>
                            خانه
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/resume" onClick={() => setIsShowSidebar(false)}>
                            رزومه
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/services" onClick={() => setIsShowSidebar(false)}>
                            خدمات
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/portfolio" onClick={() => setIsShowSidebar(false)}>
                            نمونه کارها
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/blog" onClick={() => setIsShowSidebar(false)}>
                            بلاگ
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/contact" onClick={() => setIsShowSidebar(false)}>
                            تماس
                        </NavLink>
                    </div>
                </div>
            </header>
            {
                isShowSidebar && (<ModalClose isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar}/>)
            }
        </>
    )
}