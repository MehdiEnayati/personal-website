import React, {useState, useEffect} from "react";
import articles from "../../dataArticles"
import {useParams} from "react-router-dom";
import Toast from "../Toast/Toast";

import './Article.css'

export default function Article() {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [allArticle, setAllArticle] = useState(articles)
    const [isShowAccessToast, setIsShowAccessToast] = useState(false)
    const [isShowErrorToast, setIsShowErrorToast] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let param = useParams()

    let findArticles = allArticle.find(article => (
        article.id == param.blogID
    ))


    const sendComment = (event) => {
        event.preventDefault()

        if (name === '' || text === '') {
            setIsShowErrorToast(true)
            setTimeout(() => {
                setIsShowErrorToast(false)
            }, 3000)
        } else {
            setIsShowAccessToast(true)
            setTimeout(() => {
                setIsShowAccessToast(false)
            }, 3000)
        }
        setName('')
        setText('')
    }

    return (
        <div className="main">
            <div className="article">
                <div className="article-img">
                    <img src={findArticles.img} alt={findArticles.img}/>
                </div>
                <div className="article-wrap">
                    <h2 className="article-title">{findArticles.title}</h2>
                    <div className="entry-meta">
                        <span className="date">
                            <i className="fa fa-clock"></i>
                            {findArticles.day} {findArticles.month} 1398
                        </span>
                        <span className="divider">|</span>
                        <span className="autor">
                            <i className="fa fa-fw fa-user"></i>
                            جان اسنو
                        </span>
                        <span className="divider">|</span>
                        <span className="category">
                            <i className="fa fa-fw fa-folder"></i>
                            jQuery
                        </span>
                    </div>
                    <div className="article-dec">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی
                            مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                        </p>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی
                            مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                            شصت و سه
                            درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                            شناخت
                            بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
                            کرد. در
                            این
                            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان
                            رسد
                            وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                            موجود طراحی
                            اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
                        </p>
                        <blockquote>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک
                                است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                کتابهای
                                زیادی در
                                شصت و سه درصد گذشته، حال و آینده
                            </p>
                            <footer>
                                <cite>استیو جابز</cite>
                            </footer>
                        </blockquote>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                            زیادی در
                            شصت و سه درصد گذشته، حال و آینده
                        </p>
                    </div>
                    <div className="portfolio-resume-detail-technology">
                        <div>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>React JS</span>
                            <span>Redux Js</span>
                        </div>
                    </div>
                    <div className="article-comment">
                        <h3 className="article-comment-title">کامنت ها</h3>
                        <div className="article-comment-right">
                            <div className="article-comment-img">
                                <img src="/img/testimonial_photo_3.jpg" alt="testimonial_photo_3.jpg"/>
                            </div>
                            <div className="article-comment-detail">
                                <div className="article-comment-info">
                                    <span className="article-comment-name">مهدی عنایتی</span>
                                    <span>|</span>
                                    <span className="article-comment-time">1 ساعت پیش</span>
                                </div>
                                <p className="article-comment-dec">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                    طراحان
                                    گرافیک
                                    است.
                                </p>
                                <div className="article-comment-answer">
                                    <i className="fa fa-reply"></i>
                                    پاسخ
                                </div>
                            </div>
                        </div>
                        <div className="article-comment-left">
                            <div className="article-comment-img">
                                <img src="/img/testimonial_photo_3.jpg" alt="testimonial_photo_3.jpg"/>
                            </div>
                            <div className="article-comment-detail">
                                <div className="article-comment-info">
                                    <span className="article-comment-name">مهدی عنایتی</span>
                                    <span>|</span>
                                    <span className="article-comment-time">1 ساعت پیش</span>
                                </div>
                                <p className="article-comment-dec">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                    طراحان
                                    گرافیک
                                    است.
                                </p>
                                <div className="article-comment-answer">
                                    <i className="fa fa-reply"></i>
                                    پاسخ
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register-new-comment">
                        <h2 className="register-new-comment-title">لطفا نظر خود را بنویسید</h2>
                        <form onSubmit={sendComment} className="form-comment-add">
                            <div className={`form-group ${name ? 'active' : ''}`}>
                                <i className="icon-success icon fa fa-user"></i>
                                <label htmlFor="name">نام شما</label>
                                <input value={name} className="form-control"
                                       onChange={(e) => setName(e.target.value)}
                                       placeholder="" name="name" id="name"/>
                                <div className="success form-control-border"></div>
                            </div>
                            <div className={`form-group ${text ? 'active' : ''}`}>
                                <i className="icon-success icon-area icon fa fa-comment"></i>
                                <label htmlFor="text">پیام</label>
                                <textarea value={text} onChange={(e) => setText(e.target.value)} cols="10"
                                          className="form-control" placeholder="" name="text" id="text"/>
                                <div className="form-control-border success form-control-border-area"></div>
                            </div>
                            <button onClick={sendComment} className="button" type="submit">ارسال کامنت</button>
                        </form>
                    </div>
                    <Toast isShowAccessToast={isShowAccessToast}
                           setIsShowAccessToast={setIsShowAccessToast} isShowErrorToast={isShowErrorToast}
                           setIsShowErrorToast={setIsShowErrorToast}
                    />
                </div>
            </div>
        </div>
    )
}