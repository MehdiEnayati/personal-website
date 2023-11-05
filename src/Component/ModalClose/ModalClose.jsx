import React from 'react';
import ReactDOM from "react-dom";

import './ModalClose.css'

export default function ModalClose({isShowSidebar, isShowColorPanel, setIsShowColorPanel, setIsShowSidebar}) {

    const close = () => {
        if (isShowColorPanel) {
            setIsShowColorPanel(false)
        }
        if (isShowSidebar) {
            setIsShowSidebar(false)
        }
    }

    return ReactDOM.createPortal(
        <div className={`modal-close ${!isShowSidebar ? "" : "modal-close-mobile"}`} onClick={close}></div>
        , document.getElementById("modal-media-resume")
    )
}