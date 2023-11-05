import React from "react";
import {useRoutes} from "react-router-dom"
import routes from "./routes";
import Header from "./Component/Header/Header";
import ColorBgPanel from "./Component/ColorBgPanel/ColorBgPanel";

import './app.css';

export default function App() {

    let router = useRoutes(routes)

    return (
        <div className="app">
            <Header/>
            <ColorBgPanel/>
            <div className="main-person">
                {router}
            </div>
        </div>
    );
}