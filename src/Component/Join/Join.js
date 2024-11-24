import React, { useRef, useState } from "react"
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser'
import "./Join.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react'
import animationData from '../../Assets/animation_llamo7b6.json'

const Join = () => {
    const [sent, isSent] = useState(true);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        isSent(false);
        emailjs.sendForm('service_i61j6zk', 'template_jewutck', form.current, 'fWJorPndXxQL1fVbe')
            .then((result) => {
                isSent(true);
                console.log(result.text);
                e.target.reset();
                toast.success('Message Sent!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, (error) => {
                console.log(error.text);
                isSent(true);
            });
    };

    return (
        <Element className="join" id="joinme">
            <h1 className="head">Leave a Chat</h1>
            <div className="cc">
                <form ref={form} className="form-container" onSubmit={sendEmail}>
                    <label className="label-style ">
                        Name:
                        <input
                            type="text"
                            name="user_name"
                            className="input-field"
                            required
                        />
                    </label>
                    <br />
                    <label className="label-style ">
                        Email:
                        <input
                            type="email"
                            name="user_email"
                            className="input-field"
                            required
                        />
                    </label>
                    <br />
                    <label className="label-style ">
                        Message:
                        <textarea
                            name="message"
                            className="textarea-field"
                            required
                            rows={4}
                        />
                    </label>
                    <br />
                    <button className="submit-button">{sent ? "Send" : "Sending..."}</button>
                    <ToastContainer />
                </form>
                <Lottie className="anim-container" animationData={animationData} />
            </div>
        </Element>
    )
}
export default Join;