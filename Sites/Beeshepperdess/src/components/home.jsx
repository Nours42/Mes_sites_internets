import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
        return (
                <div>
                <h1><Link to={`/Contact`}>Hébergez une ou plusieurs ruches</Link></h1>
                <p>La première agence de placement de ruches dans des propriétés de luxe ou de standing en France</p>
                <p>Notre métier, aider nos clients à implanter des ruches sur un domaine d'exception, effectuer le suivi annuel et l'entretien des colonies et fournir le miel produit localement déjà mis en pot aux propriétaire du domaine.</p>
                <p>Ils ont alors tout loisir d'offrir ce miel à leurs amis, d'en disposer pour améliorer la qualité du miel mangé à la maison etc...</p>
                <p>Nous pouvons également assurer l'initiation et la formation à l'apiculture pour les adultes, les enfants ou les employés de la famille.</p>
                <p>Nous pouvons également étudier l'implantation de ruchers sur des propriétés de luxe à l'étranger sur demande</p>
                </div>
        )
}

export default Home