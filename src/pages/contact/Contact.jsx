import React, {useEffect, useState} from "react";
import MapCountry from "../../Component/MapCountry/mapCountry";
import regex from "../../regex";
import Toast from "../../Component/Toast/Toast";

import './Contact.css'

export default function Contact({value}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [isShowAccessToast, setIsShowAccessToast] = useState(false)
    const [isShowErrorToast, setIsShowErrorToast] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState();

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsValidEmail(regex.testEmail(emailValue));
    };

    const sendMessage = (event) => {
        event.preventDefault()

        if (name === '' || email === '' || text === '' || !isValidEmail) {
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
        setEmail('')
        setText('')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main">
            <div className="top-page">
                <h2 className="title-page">تماس باما</h2>
            </div>
            <div className="bottom-page">
                <div className="contact">
                    <div className="contact-wrap">
                        <h2 className="contact-title">
                            با من در
                            <span> ارتباط </span>
                            باشید
                        </h2>
                        <div className="svg-map-country">
                            <MapCountry/>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info-detail">
                                <i className="fa fa-map-marker"></i>
                                <span>خیابان رجایی ضلع شرقی کوچه زمانی</span>
                            </div>
                            <div className="contact-info-detail">
                                <i className="fa fa-envelope"></i>
                                <span>enayatim637@gmail.com</span>
                            </div>
                            <div className="contact-info-detail">
                                <i className="fa fa-phone"></i>
                                <span>09380314486</span>
                            </div>
                            <div className="contact-info-detail">
                                <i className="fa fa-check"></i>
                                <span>آماده خدمات رسانی</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-me">
                        <h2 className="contact-me-title">
                            تماس
                            <span> با من</span>
                        </h2>
                        <div className="register-new-comment">
                            <h2 className="register-new-comment-title">لطفا نظر خود را بنویسید</h2>
                            <form onSubmit={sendMessage} className="form-comment-add">
                                <div className={`form-group ${name ? 'active' : ''}`}>
                                    <i className="icon icon-success fa fa-user"></i>
                                    <label htmlFor="name">نام شما</label>
                                    <input value={name} className="form-control"
                                           onChange={(e) => setName(e.target.value)}
                                           placeholder="" name="name" id="name"/>
                                    <div className="form-control-border success"></div>
                                </div>
                                <div className={`form-group ${email ? 'active' : ''}`}>
                                    <i className={`icon fa fa-envelope ${isValidEmail ? 'icon-success' : 'icon-error'}`}></i>
                                    <label htmlFor="email">ایمیل</label>
                                    <input value={email} onChange={handleEmailChange} className="form-control"
                                           placeholder="" name="email" id="email"/>
                                    <div
                                        className={`form-control-border ${isValidEmail ? 'success' : 'error'}`}></div>
                                </div>
                                <div className={`form-group ${text ? 'active' : ''}`}>
                                    <i className="icon-area icon-success icon fa fa-comment"></i>
                                    <label htmlFor="text">پیام</label>
                                    <textarea value={text} onChange={(e) => setText(e.target.value)} cols="10"
                                              className="form-control" placeholder="" name="text" id="text"/>
                                    <div className="form-control-border form-control-border-area success"></div>
                                </div>
                                <button onClick={sendMessage} className="button" type="submit">ارسال کامنت</button>
                            </form>
                            <Toast
                                setIsShowAccessToast={setIsShowAccessToast}
                                setIsShowErrorToast={setIsShowErrorToast}
                                isShowAccessToast={isShowAccessToast}
                                isShowErrorToast={isShowErrorToast}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}