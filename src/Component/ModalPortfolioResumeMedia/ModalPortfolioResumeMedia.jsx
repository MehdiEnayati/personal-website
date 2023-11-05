import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ModalPortfolioResumeMedia.css'
import {Navigation, Pagination} from "swiper/modules";

export default function ModalPortfolioResumeMedia({modalMediaData, setIsModalMedia}) {

    const [isCloseModalImg, setIsCloseModalImg] = useState(false)

    let root = document.getElementById("root")

    const closeModalMedia = () => {
        setIsCloseModalImg(true)
        setIsModalMedia(false)
        root.className = ""
    }

    return ReactDOM.createPortal(
        <>
            {
                modalMediaData && (
                    <div className={`portfolio ${isCloseModalImg ? 'not-active-portfolio' : ''}`}>
                        <div className="portfolio-icon" onClick={closeModalMedia}>
                            <i className="fa fa-close"></i>
                        </div>
                        <h2 className="portfolio-resume-title">{modalMediaData.title}</h2>
                        <div className="portfolio-resume">
                            <div className="portfolio-resume-img">
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Pagination, Navigation]}
                                    navigation={true}
                                    className="mySwiper"
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                >
                                    <SwiperSlide>
                                        <img className="img-modal-portfolio-resume" src={modalMediaData.img} alt={modalMediaData.img}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-modal-portfolio-resume" src="/img/4.jpg" alt="/img/4.jpg"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-modal-portfolio-resume" src="/img/5.jpg" alt="/img/4.jpg"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-modal-portfolio-resume" src="/img/3.jpg" alt="/img/4.jpg"/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="portfolio-resume-detail">
                                <h2 className="portfolio-resume-dec-title">توضیحات</h2>
                                <div className="portfolio-resume-detail-name">
                                    <i className="fa fa-user"></i>
                                    <span>مهدی عنایتی</span>
                                </div>
                                <div className="portfolio-resume-detail-email">
                                    <i className="fa-solid fa-earth-europe"></i>
                                    <span className="email">enayatim637@gmail.com</span>
                                </div>
                                <div className="portfolio-resume-detail-date">
                                    <i className="fa fa-database"></i>
                                    <span>{modalMediaData.date}</span>
                                </div>
                                <p className="portfolio-resume-dec">
                                    {modalMediaData.desc}
                                </p>
                                <div className="portfolio-resume-detail-technology">
                                    <h2 className="portfolio-resume-detail-technology-title">تکنولوژی</h2>
                                    <div>
                                        <span>{modalMediaData.technologyOne}</span>
                                        <span>{modalMediaData.technologyTwo}</span>
                                        <span>{modalMediaData.technologyThree}</span>
                                        <span>{modalMediaData.technologyFour}</span>
                                        <span>{modalMediaData.technologyFive}</span>
                                    </div>
                                </div>
                                <div className="portfolio-resume-detail-media">
                                    <h2 className="portfolio-resume-detail-media-name">اشتراک گذاری</h2>
                                    <div>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
        , document.getElementById('modal-media-resume')
    )
}