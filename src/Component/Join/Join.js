import React, { useRef } from "react"
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser'
import "./Join.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react'
import animationData from '../../Assets/animation_llamo7b6.json'

const Join = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i61j6zk', 'template_jewutck', form.current, 'fWJorPndXxQL1fVbe')
            .then((result) => {
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
            });

    };

    return (
        <Element className="join" id="joinme">
            <h1 className="head">Leave a Chat</h1>
            <div className="cc">
                <form ref={form} className="form-container" onSubmit={sendEmail}>
                    <label className="label-style ">
                        Username:
                        <input
                            type="text"
                            name="user_name"
                            className="input-field"
                        />
                    </label>
                    <br />
                    <label className="label-style ">
                        Email:
                        <input
                            type="email"
                            name="user_email"
                            className="input-field"
                        />
                    </label>
                    <br />
                    <label className="label-style ">
                        Description:
                        <textarea
                            name="message"
                            className="textarea-field"
                        />
                    </label>
                    <br />
                    <button type="submit" className="submit-button">Send</button>
                    <ToastContainer />
                </form>
                <Lottie className="anim-container" animationData={animationData}/>
            </div>
        </Element>
    )
}
export default Join;