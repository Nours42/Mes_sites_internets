import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <section>
            <h2>Bienvenue sur notre site</h2>
            <h3>Développement Web</h3>
            <p>Nos équipes créent sur mesure vos sites internet, vos bases de données, vos boutiques en ligne</p>
            <p>À partir de zéro ou en reprenant un site existant même ancien</p>
            <p>Ayez un site au goût du jour dans les derniers languages, adapté à la navigation sur PC, mac mais aussi sur téléphone et tablette.</p>
            <p>Choisissez avec nous votre charte graphique et l'image que vous souhaitez donner à vos futurs clients et collaborateurs.</p>
            <h3>Développement d'application mobile</h3>
            <p>Nous développons aussi des applications mobile multi-supports sous Android, Iphone ou PC</p>
            <p>Intéressé ?</p>
            <p><Link to='/contact'>Contactez-nous</Link></p>

        </section>
    )
}

export default Home