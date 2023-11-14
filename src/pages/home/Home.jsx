import React, {useEffect} from "react";
import BottomDownloadResume from "../../Component/BottomDownloadResume/BottomDownloadResume";
import Typewriter from "typewriter-effect";

import './Home.css'

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main">
            <div className="top-home">
                <div className="img-home">
                    <img src="/img/photo.png" alt=""/>
                </div>
                <div className="top-home-bottom">
                    <div className="title-home">
                        <h2>مهدی عنایتی</h2>
                    </div>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('کارهایی که از نظر بقیه نشدنی و ناممکن باشه ،' +
                                ' دقیقا همون کارها به من انرژی بیشتری میده')
                                .start()
                                .pauseFor(100)
                                .deleteAll()
                                .typeString('توسعه دهنده فرانت اند ...')
                                .start()
                                .pauseFor(100)
                                .deleteAll()
                                .typeString('طراح سایت ...')
                                .start()
                                .pauseFor(100)
                                .deleteAll()
                        }}
                        options={{
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div className="bottom-home">
                <div className="bottom-home-top">
                    <div className="aboute-me-title">
                        <h2>
                            درباره
                            <span> من</span>
                        </h2>
                    </div>
                    <div className="aboute-me-text">
                        <p>
                            یه ساله برنامه نویسی رو شروع کردم و توسعه دهنده فرانت اند هستم. برای نمونه کار دو تا پروژه
                            زدم که لینک گیت هابشون رو توی قسمت لینک ها قرار دادم. خلاصه کارهایی که از نظر بقیه نشدنی و
                            ناممکن باشه ، دقیقا همون کارها به من انرژی بیشتری میده.
                        </p>
                    </div>
                    <BottomDownloadResume/>
                </div>
                <div className="infos-person">
                    <ul className="info-list">
                        <li>
                            <span className="title">سن</span>
                            <span className="value">21</span>
                        </li>
                        <li>
                            <span className="title">محل سکونت</span>
                            <span className="value">خوزستان شوشتر</span>
                        </li>
                        <li>
                            <span className="title">آدرس</span>
                            <span className="value">خیابان رجایی شرقی کوچه زمانی پلاک 141</span>
                        </li>
                        <li>
                            <span className="title">ایمیل</span>
                            <span className="value email">enayatim637@gmail.com</span>
                        </li>
                        <li>
                            <span className="title">تلفن</span>
                            <span className="value">09380314486</span>
                        </li>
                        <li>
                            <span className="title">وضعیت</span>
                            <span className="value">آماده</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}