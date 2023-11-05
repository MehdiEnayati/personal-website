import React, {useState} from 'react';
import ReactDOM from "react-dom";

import './ModalPortfolioResumeVideo.css'

export default function ModalPortfolioResumeVideo({modalVideoData, setIsModalVideo}) {

    const [isCloseModalVideo, setIsCloseModalVideo] = useState(true)

    let root = document.getElementById("root")

    const closeModalVideo = () => {
        setIsCloseModalVideo(false)
        setIsModalVideo(false)
        root.className = ""
    }

    return ReactDOM.createPortal(
        <>
            {
                modalVideoData && (
                    <div
                        className={`modal-portfolio-resume-video ${isCloseModalVideo ? "modal-portfolio-resume-video-active" : ""}`}>
                        <div onClick={closeModalVideo} className="icon-close-modal-video">
                            <i className="fa fa-close"></i>
                        </div>
                        <div className="video-portfolio-resume">
                            <video src={modalVideoData.video} controls></video>
                        </div>
                    </div>
                )
            }
        </>
        , document.getElementById('modal-media-resume')
    );
}