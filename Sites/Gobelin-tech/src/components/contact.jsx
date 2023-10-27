import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1n71mjf', 'template_dj9dhn3', form.current, 'TtGgI4c7Tx01u0qHn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <p>Votre nom ou celui de votre entreprise</p>
            <input 
                type="text"
                name="user_name"
            />
            <p>Email</p>
            <input
                type="email"
                name="user_email"
            />
            <p>Message</p>
            <textarea 
                name="message"
                id="message"
                rows='8'
            />
            <br></br>
            <p className="envoyer">
                <input type="submit" value="Envoyer" />
            </p>
        </form>
    );
};

export default Contact