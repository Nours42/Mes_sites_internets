import React from 'react'
import { Link } from 'react-router-dom'

import Chambre1 from '../assets/img/Phone/portrait/chambre1.png'
import Chambre2 from '../assets/img/Phone/portrait/chambre2.png'
import Chambre3 from '../assets/img/Phone/portrait/chambre3.png'

const Auberge = (props) => {
    return (
        <section>
            <h2>L'auberge</h2>
            <p>Dans une maison de XIXème siècle, situé juste en face du restaurant, nos trois chambres disponibles à l'année, vous attendent pour un séjour au calme. Vous pourrez profiter du chant des oiseaux et de la fontaine.</p>
            <img
                src={Chambre1}
                alt='Chambre 1'
                className='chambres'
            />
            <p>Deux de ces chambres sont en lit double, comme celle ci-dessus, une avec deux lits simples comme ci-dessous. Chacune à sa salle d'eau avec WC.</p>
            <img
                src={Chambre2}
                alt='chambre 2'
                className='chambres'
            />
            <p>Le petit déjeuner est possible à la demande. Ainsi que le panier pique-nique du lendemain.</p>
            <img
                src={Chambre3}
                alt='chambre 3'
                className='chambres'
            />
            <h2>N'oubliez pas de <Link to="/contact">réserver.</Link></h2>
        </section>
    )
}

export default Auberge