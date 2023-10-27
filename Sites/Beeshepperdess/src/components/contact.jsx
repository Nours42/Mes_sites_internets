import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_paz2oba', 'template_98sawul', form.current, 'acN-6PQ9tcLb7_SWP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p>Name</p>
      <input type="text" name="user_name" />
      <p>Email</p>
      <input type="email" name="user_email" />
      <p>Message</p>
      <textarea name="message" id="message"/>
      <br></br>
      <p className="envoyer"><input type="submit" value="Envoyer" /></p>
    </form>
  );
};

export default ContactUs