import React, {useEffect} from "react";
import ResumeDetails from "../../Component/ResumeDetails/ResumeDetails";
import BottomDownloadResume from "../../Component/BottomDownloadResume/BottomDownloadResume";

import './Resume.css'

export default function Resume() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main">
            <div className="top-page">
                <h2 className="title-page">رزومه</h2>
            </div>
            <div className="bottom-page">
                <div className="bottom-page-resume">
                    <div className="resume">
                        <h2 className="resume-title">تحصیلات</h2>
                        <div className="resume-wrap">
                            <ResumeDetails
                                title="دوره جاوا اسکریپت"
                                nameCompany="شرکت سیب پردازان"
                                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                                year="مهر 1399"
                            />
                            <ResumeDetails
                                title="دوره ریکت"
                                nameCompany="شرکت سبزلرن"
                                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                                year="مهر 1401"
                            />
                        </div>
                    </div>
                    <div className="resume">
                        <h2 className="resume-title">سوابق شغلی</h2>
                        <div className="resume-wrap">
                            <ResumeDetails
                                title="طراح وب"
                                nameCompany="شرکت سیب پردازان"
                                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                                year="آبان 96 تا اردیبهشت 98"
                            />
                            <ResumeDetails
                                title="برنامه نویس اندروید"
                                nameCompany="شرکت گردمون"
                                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
                                year="آبان 98 تا اکنون"
                            />
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-item">
                        <h2 className="skill-title">
                            مهارت های
                            <span> طراحی</span>
                        </h2>
                        <div className="skill-wrap">
                            <h4 className="skill-detail-title">طراحی وب</h4>
                            <div className="skill-container">
                                <div className="skill-detail first-child"></div>
                            </div>
                            <h4 className="skill-detail-title">فتوشاپ</h4>
                            <div className="skill-container">
                                <div className="skill-detail second-child"></div>
                            </div>
                            <h4 className="skill-detail-title">تدوین</h4>
                            <div className="skill-container">
                                <div className="skill-detail tree-child"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h2 className="skill-title">
                            مهارت های
                            <span> کدنویسی</span>
                        </h2>
                        <div className="skill-wrap">
                            <h4 className="skill-detail-title">HTML5</h4>
                            <div className="skill-container">
                                <div className="skill-detail first-child"></div>
                            </div>
                            <h4 className="skill-detail-title">CSS3</h4>
                            <div className="skill-container">
                                <div className="skill-detail second-child"></div>
                            </div>
                            <h4 className="skill-detail-title">JavaScript</h4>
                            <div className="skill-container">
                                <div className="skill-detail tree-child"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <BottomDownloadResume/>
            </div>
        </div>
    );
}