import React from 'react'

import Facebook from '../assets/img/Phone/portrait/facebook.png'
import EMail from '../assets/img/Phone/portrait/email.png'
import Telephone from '../assets/img/Phone/portrait/telephone.png'

const Contact = (props) => {
    return (
        <section>
            <h2>Contactez-nous</h2>
            <p className='contact'>Pour toutes réservations ou demande de renseignements, contactez-nous par :</p>
            <a href='https://www.facebook.com/Auberge-de-Py-2022-112257288142368/'>
                <img
                    src={Facebook}
                    alt="logo de facebook"
                    className="logo"
                />
                <p>Notre Facebook</p>
            </a>
            <a href='mailto:aubergedepy66360@gmail.com'>
                <img
                    src={EMail}
                    alt="logo email"
                    className="logo"
                />
                <p>Notre Email</p>
            </a>
            <p className='contact'>Ou sur notre téléphone</p>
            <img
                src={Telephone}
                alt="logo téléphone"
                className="logo"
            />
            <p className='contact'>au</p>
            <h2>06.83.85.24.68</h2>
        </section>
    )
}

export default Contact