import React, {useState} from "react";
import ModalPortfolioResumeMedia from "../ModalPortfolioResumeMedia/ModalPortfolioResumeMedia";
import ModalPortfolioResumeImg from "../ModalPortfolioResumeImg/ModalPortfolioResumeImg";
import ModalPortfolioResumeVideo from "../ModalPortfolioResumeVideo/ModalPortfolioResumeVideo";
import DataPortfolioResumeMedia from "../../dataPortfolioResumeMedia";
import dataPortfolioResumeImg from "../../dataPortfolioResumeImg";
import dataPortfolioResumeVideo from "../../dataPortfolioResumeVideo";

import './PortfolioItem.css'

export default function Menu({allMenus}) {

    const [isModalMedia, setIsModalMedia] = useState(false)
    const [isModalImg, setIsModalImg] = useState(false)
    const [isModalVideo, setIsModalVideo] = useState(false)

    const [modalMediaData, setModalMediaData] = useState(null);
    const [modalImgData, setModalImgData] = useState(null);
    const [modalVideoData, setModalVideoData] = useState(null);

    let root = document.getElementById("root")

    const showModal = (id) => {

        const dataMedia = DataPortfolioResumeMedia.find(item => item.id === id);
        const dataImg = dataPortfolioResumeImg.find(item => item.id === id);
        const dataVideo = dataPortfolioResumeVideo.find(item => item.id === id);

        setModalMediaData(dataMedia);
        setModalImgData(dataImg)
        setModalVideoData(dataVideo)

        allMenus.map(menus => {
                if (menus.category === "رسانه") {
                    setIsModalMedia(true);
                    root.className = "modal-overflow"
                } else if (menus.category === "تصویر") {
                    setIsModalImg(true)
                    root.className = "modal-overflow"

                } else if (menus.category === "ویدئو") {
                    setIsModalVideo(true)
                    root.className = "modal-overflow"

                }
            }
        )
        // if (isModalMedia) {
        //
        // } else {
        //     root.className = ""
        // }
        //
        // if (isModalImg) {
        //     root.className = "modal-overflow"
        // } else {
        //     root.className = ""
        // }
        //
        // if (isModalVideo) {
        //     root.className = "modal-overflow"
        // } else {
        //     root.className = ""
        // }
    }

    return (
        <>
            {
                allMenus.map(menus => {
                    return (
                        <div key={menus.id} className="portfolio-item" onClick={() => showModal(menus.id)}>
                            <img className="portfolio-img" src={menus.img} alt="1.jpg"/>
                            <div className="portfolio-detail">
                                <h5>نام پروژه</h5>
                                <div>
                                    <p className="category">{menus.category}</p>
                                    <i className={menus.icon}></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                isModalMedia && (
                    <ModalPortfolioResumeMedia modalMediaData={modalMediaData} setIsModalMedia={setIsModalMedia}/>)
            }
            {
                isModalImg && (
                    <ModalPortfolioResumeImg modalImgData={modalImgData} setIsModalImg={setIsModalImg}/>
                )
            }
            {
                isModalVideo && (
                    <ModalPortfolioResumeVideo modalVideoData={modalVideoData} setIsModalVideo={setIsModalVideo}/>
                )
            }
        </>
    )
}