import React, {useState} from 'react';
import ReactDOM from "react-dom";

import './ModalPortfolioResumeImg.css'

export default function ModalPortfolioResumeImg({modalImgData, setIsModalImg}) {

    const [isCloseModalImg, setIsCloseModalImg] = useState(true)

    let root = document.getElementById("root")

    const closeModalImg = () => {
        setIsCloseModalImg(false)
        setIsModalImg(false)
        root.className = ""
    }

    return ReactDOM.createPortal(
        <>
            {
                modalImgData && (
                    <div
                        className={`modal-portfolio-resume-img ${isCloseModalImg ? "modal-portfolio-resume-img-active" : ""}`}>
                        <div onClick={closeModalImg} className="icon-close-modal-img">
                            <i className="fa fa-close"></i>
                        </div>
                        <div className="img-portfolio-resume">
                            <img src={modalImgData.img} alt={modalImgData.img}/>
                        </div>
                    </div>
                )
            }
        </>, document.getElementById('modal-media-resume')
    );
}