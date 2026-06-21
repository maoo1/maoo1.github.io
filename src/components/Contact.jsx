import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

import "../style/Contact.css";

export default function Contact({ toggleContact }) {
    const [contactInfo, setContactInfo] = useState({
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            {
                user_email: contactInfo.email, 
                subject: contactInfo.subject, 
                message: contactInfo.message,
            }, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setStatus("success");
            setTimeout(() => toggleContact(), 1500);
        }).catch(() => {
            setStatus("error");
        })
    }

    return (
        <div className="contact-overlay" onClick={toggleContact}>
            <div className="contact" onClick={e => e.stopPropagation()}>
                <div className="header">
                    <div className="contact-title">
                        <p>Contact Me</p>
                    </div>
                    <div className="contact-x">
                        <IoCloseOutline onClick={toggleContact} />
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-email">
                        <label htmlFor="email">From: </label>
                        <input type="email" id="email" className="email-input" placeholder="Your Email" 
                            onChange={e => setContactInfo({...contactInfo, email: e.target.value})}/>
                    </div>
                    <div className="form-subject">
                        <input type="text" id="subject" className="subject-input" placeholder="Subject..." 
                            onChange={e => setContactInfo({...contactInfo, subject: e.target.value})}/>
                    </div>
                    <textarea
                        placeholder="Write your message here..."
                        className="message-input"
                        name="message"
                        onChange={e => setContactInfo({...contactInfo, message: e.target.value})}
                    />
                    <div className="form-buttons">
                        {status === "success" && <p className="status-success">Message sent!</p>}
                        {status === "error" && <p className="status-error">Something went wrong. Try again.</p>}
                        <input type="button" onClick={toggleContact} value="Cancel" />
                        <input type="submit" value="Send" />
                    </div>
                </form >
            </div>
        </div>
    )
}