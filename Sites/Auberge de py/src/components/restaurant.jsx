import React from 'react'
import { Link } from 'react-router-dom'

import Burger from '../assets/img/Phone/portrait/burger.png'
import Cote from '../assets/img/Phone/portrait/cote.png'

const Restaurant = (props) => {
    return (
        <section>
            <h2>Restaurant</h2>
            <p>Venez retrouver, sur réservation, divers plats à emporter ou à manger sur place pour une petite ou une grande faim, fait maison et avec des produits locaux.</p>
            <p>Ne ratez pas nos en-cas sucrés.</p>
            <p>Tous les soirs, notre cuisine propose un plat chaud et de saison</p>
            <p>par exemple cette cote de porc échine, frites et sa sauce moutarde miel maison</p>
            <img
                src={Cote}
                alt='cote de porc échine, frites et sauce moutarde miel maison'
                className='cote'
            />
            <p>Parfois le dimanche, nous faisons des burgers</p>
            <img
                src={Burger}
                alt='burger'
                className='burger'
            />
            <p>Ce ne sont que deux exemples de ce que nous proposons, n'hésitez pas à nous contacter pour connaitre le menu du jour et surtout</p>
            <h2>N'oubliez pas de <Link to="/contact">réserver.</Link></h2>
        </section>
    )
}

export default Restaurant