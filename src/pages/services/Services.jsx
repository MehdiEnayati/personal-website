import React, {useEffect} from "react";
import ServicesDetail from "../../Component/ServicesDetail/ServicesDetail";
import {GrNext, GrPrevious} from "react-icons/gr";
import CustomerCommentDetail from "../../Component/CustomerCommentDetail/CustomerCommentDetail";
import PriceDetail from "../../Component/PriceDetail/PriceDetail";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import "./Services.css";
import {Pagination} from "swiper/modules";

export default function Services() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main">
            <div className="top-page">
                <h2 className="title-page">خدمات</h2>
            </div>
            <div className="bottom-page">
                <h2 className="services-title">
                    خدمات
                    <span> من</span>
                </h2>
                <div className="services-wrap">
                    <ServicesDetail
                        img="/img/web_design_icon.png"
                        title="طراحی سایت"
                        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                    />
                    <ServicesDetail
                        img="/img/photography_icon.png"
                        title="عکاسی"
                        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                    />
                    <ServicesDetail
                        img="/img/creativity_icon.png"
                        title="مدیریت"
                        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                    />
                    <ServicesDetail
                        img="/img/advetising_icon.png"
                        title="تبلیغات"
                        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                    />
                </div>
                <div className="customers">
                    <h2 className="title-services">مشتریان</h2>
                    <div className="company-logo">
                        <a href="#">
                            <img src="/img/client_1.png" alt=""/>
                        </a>
                        <a href="#">
                            <img src="/img/client_2.png" alt=""/>
                        </a>
                        <a href="#">
                            <img src="/img/client_3.png" alt=""/>
                        </a>
                        <a href="#">
                            <img src="/img/client_4.png" alt=""/>
                        </a>
                        <a href="#">
                            <img src="/img/client_5.png" alt=""/>
                        </a>
                        <a href="#">
                            <img src="/img/client_6.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="customers-comment">
                    <h2 className="title-services">دیدگاه مشتریان</h2>
                    <div className="customers-comment-details">
                        <Swiper
                            slidesPerView={1}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <CustomerCommentDetail
                                    img="/img/testimonial_photo_3.jpg"
                                    title="رسول آجرمال"
                                    nameCompany="شرکت دیجی کالا"
                                    textComment="                    لورم ایپسوم متن
                                            ساختگی با تولید سادگی نامفهوم
                                         از صنعت چاپ و با استفاده از طراحان گرافیک است."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CustomerCommentDetail
                                    img="/img/testimonial_photo_3.jpg"
                                    title="مهدی عنایتی"
                                    nameCompany="شرکت دیوار"
                                    textComment="                    لورم ایپسوم متن
                                            ساختگی با تولید سادگی نامفهوم
                                         از صنعت چاپ و با استفاده از طراحان گرافیک است."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CustomerCommentDetail
                                    img="/img/testimonial_photo_3.jpg"
                                    title="محمد غفاری"
                                    nameCompany="شرکت آپارات"
                                    textComment="                    لورم ایپسوم متن
                                            ساختگی با تولید سادگی نامفهوم
                                         از صنعت چاپ و با استفاده از طراحان گرافیک است."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CustomerCommentDetail
                                    img="/img/testimonial_photo_3.jpg"
                                    title="یاسین غفاری"
                                    nameCompany="شرکت کشت و صنعت"
                                    textComment="                    لورم ایپسوم متن
                                            ساختگی با تولید سادگی نامفهوم
                                         از صنعت چاپ و با استفاده از طراحان گرافیک است."
                                />
                            </SwiperSlide>
                        </Swiper>
                        {/*<div className="slider-pagination">*/}
                        {/*    <div className="btn swiper-button-prev">*/}
                        {/*        <GrNext className="icon-slider"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="btn swiper-button-next">*/}
                        {/*        <GrPrevious className="icon-slider"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="price-services">
                    <h2 className="title-services">قیمت ها</h2>
                    <div className="price-services-detail">
                        <PriceDetail month="روزانه" desc1="با کیفیت" desc2="با سرعت بسیار بالا"
                                     desc3="با امنیت بالا"
                                     title="پنل شماره یک" price="۱۰۰,۰۰۰"/>
                        <PriceDetail month="ماهانه" desc1="با کیفیت" desc2="با سرعت بسیار بالا"
                                     desc3="با امنیت بالا"
                                     title="پنل شماره دو" price="۲۰۰,۰۰۰"/>
                        <PriceDetail month="سالانه" desc1="با کیفیت" desc2="با سرعت بسیار بالا"
                                     desc3="با امنیت بالا"
                                     title="پنل شماره سه" price="۳۰۰,۰۰۰"/>
                    </div>
                </div>
            </div>
        </div>
    )
}