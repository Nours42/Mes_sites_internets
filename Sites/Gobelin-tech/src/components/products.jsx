import React from 'react'

import Auberge from '../assets/img/aubergedepy.png'
import Bees from '../assets/img/beessheperdess.png'
import Tablee from '../assets/img/tablee.png'

const Products = (props) => {
    return (
        <section>
            <h2>Quelques-unes de nos créations</h2>
            <img
                src={Auberge}
                alt="capture d'écran du site de l'auberge de Py"
                className='auberge'
            />
            <article>
                <a href="https://www.aubergedepy.fr/">L'auberge de Py</a>
                
                <p>L'auberge de Py souhaitait un site mis à jour comportant des renseignements, des photos des lieux, de la nature et du village qui donnent envie de séjourner chez eux.</p>
                <p>Nous sommes allé les rencontrer, avons pris quelques photos et fait ce site.</p>
                <p>Simple et accueillant, ils le voulaient à leur image.</p>
                <p>Si vous êtes dans les Pyrénées-Orientales, passez-y, leurs cookies sont terriblement addictifs.</p>
            </article>
            <img
                src={Bees}
                alt="capture d'écran du site de Beesshepherdess"
                className='bees'
            />
            <article>
                <a href="https://www.beesshepherdess.com/">Bees Shepherdess</a>
                
                <p>Amoureux de la nature, vous souhaiter aider cette dernière en accueillant dans vos jardins une ou plusieurs ruches afin de polléniser et avoir de merveilleuses fleurs et bien entendu du miel ?</p>
                <p>C'est ce que proposent ces apiculteurs.</p>
                <p>Ils vous fournissent le miel issu de vos abeilles et peuvent même vous former à l'apiculture.</p>
            </article>
            <img
                src={Tablee}
                alt="capture d'écran de l'application 'Une Tablée dans ta poche'"
                className='tablee'
            />
            <article>
                <a>Une Tablée dans ta poche</a>
                <p>Nous avons conçu cette application pour la gestion des tablées de jeux lors d'une convention de JDR</p>
                <p>Cette dernière permet à l'utilisateur de créer son profil, de consulter les parties de jeux existantes et de s'y inscrire</p>
                <p>Elle permet aussi aux joueurs d'enregistrer leurs «Triggers Warnings», les sujets qu'ils ne souhaitent pas aborder dans une partie de JDR</p>
                <p>Ceux-ci sont envoyés anonyment au maitre de jeu de la partie quand celle-ci commence.</p>
            </article>

        </section>
    )
}

export default Products