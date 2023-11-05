import React, {useState} from 'react';
import {MdSettings} from 'react-icons/md';
import ModalClose from "../ModalClose/ModalClose";

import './ColorBgPanel.css';

export default function ColorBgPanel() {
    const [isShowColorPanel, setIsShowColorPanel] = useState(false);
    let body = document.getElementById('body')

    const showColorBgPanel = () => {
        setIsShowColorPanel(!isShowColorPanel);
    };

    const changeBackgroundColor = (color) => {
        if (body) {
            body.className = color
        }
        setIsShowColorPanel(false);
    };

    return (
        <>
            <div onClick={showColorBgPanel} className="show-and-hide-bg-color-panel">
                <MdSettings/>
            </div>
            <div className={`color-bg-panel ${isShowColorPanel ? 'active-color-bg-panel' : ''}`}>
                <h2 className="title-color-panel">رنگ اصلی</h2>
                <div className="colors">
                    <span onClick={() => changeBackgroundColor('blue')} className="blue"></span>
                    <span onClick={() => changeBackgroundColor('red')} className="red"></span>
                    <span onClick={() => changeBackgroundColor('purple')} className="purple"></span>
                    <span onClick={() => changeBackgroundColor('green')} className="green"></span>
                    <span onClick={() => changeBackgroundColor('yellow')} className="yellow"></span>
                    <span onClick={() => changeBackgroundColor('orange')} className="orange"></span>
                    <span onClick={() => changeBackgroundColor('black')} className="black"></span>
                    <span onClick={() => changeBackgroundColor('gray')} className="gray"></span>
                    <span onClick={() => changeBackgroundColor('brown')} className="brown"></span>
                </div>
            </div>
            {
                isShowColorPanel && <ModalClose isShowColorPanel={isShowColorPanel} setIsShowColorPanel={setIsShowColorPanel}/>
            }
        </>
    );
}