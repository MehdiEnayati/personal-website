import React, {useRef, useEffect} from 'react';

import './Toast.css';

export default function Toast({text, isShowErrorToast, isShowAccessToast, setIsShowErrorToast, setIsShowAccessToast}) {

    const toast = useRef();
    const textToast = useRef()

    useEffect(() => {
        if (isShowErrorToast) {
            toast.current.classList.add('toast-active');
            textToast.current.innerHTML = 'اطلاعات را به صورت صحیح وارد کنید'
        } else if (isShowAccessToast) {
            toast.current.classList.add('toast-active');
            textToast.current.innerHTML = 'پیام شما با موفقیت برای ادمین ارسال شد'
        }
    }, [isShowErrorToast, isShowAccessToast]);

    const closeToast = () => {
        setIsShowAccessToast(false)
        setIsShowErrorToast(false)
        toast.current.className = 'toast'
    };

    return (
        <div ref={toast}
             className={`toast ${isShowAccessToast ? 'toast-access' : ''} ${isShowErrorToast ? 'toast-error' : ''}`}>
            <div onClick={closeToast} className="icon-toast">
                <i className="fa fa-close"></i>
            </div>
            <div className="toast-text">
                <p ref={textToast}>{text}</p>
            </div>
        </div>
    );
}