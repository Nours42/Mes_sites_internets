import React from 'react'
import { Link } from 'react-router-dom'

import gite from '../assets/img/Phone/portrait/gite en 360x480.png'
import rue from '../assets/img/Phone/portrait/rue en 360x550.png'
import randonnee from '../assets/img/Default/randonnee.png'
import patrimoine from '../assets/img/Default/patrimoine.png'
import gastronomie from '../assets/img/Default/gastronomie.png'

const Home = (props) => {
    return (
        <section>
            <h2>Une auberge basée sur la convivialité</h2>
            <img
                src={gite}
                alt="photo de l'auberge"
                className='gite'
                
            />
            <p>C'est avec grand plaisir et beaucoup d'enthousiasme que Marie et Alexis gèrent l'enseigne communale du petit village de Py.</p>
            <p>Au coeur de la vallée de la Rotja, en plein coeur du parc naturel régional des Pyrénées Catalanes, le cadre est agréable et propice au retour à la nature. Vous pourrez en admirer les paysages depuis la terrasse du restaurant, profiter du calme lors d'une nuit en chambres d'hôtes, et repartir équipé après un passage à l'épicerie.</p>
            <p>Ouverture à l'année, réservation conseillée depuis l'onglet <Link to='/contact'>Contactez-nous.</Link></p>
            <h2>Visiter le village</h2>
            <img
                src={rue}
                alt="l'église de Py"
                className='rue'
            />
            <p>Py, ou Pi de Conflent, est un village catalan qui a su conserver son authenticité.</p>
            <p>Idéalement situé pour les randonneurs (GR10 et diverses balades aux alentours), il ravit également les passionnés d'histoire grâce à son église fière de fêter son Millénaire en 2022.</p>
            <p>Enfin, ne partez pas de la vallée sans avoir visité son patrimoine gustatif : pommes, fromages, viande ou encore bière, il y en a pour tous les goûts.</p>
            <section className='rando-patri-gastro'>
                <article >
                    <h3 className='rando'>Pays de randonnées</h3>
                    <img
                        src={randonnee}
                        alt="panneau du GR10"
                        className="round"
                        
                    />
                    <p className="petit">Idéalement placé sur le GR10 mais aussi de nombreuses boucles de randonnées dans la réserve naturelle de Py et le Parc Naturel Régional (PNR) des Pyrénées Catalanes.</p>
                    <p className="petit">Alexis saura vous conseiller, selon votre niveau, les différents parcours qui se proposent à vous.</p>
                </article>
                <article>
                    <h3 className='rando'>Un patrimoine à découvrir</h3>
                    <img
                        src={patrimoine}
                        alt="Photo de paquerettes a proximité de l'auberge"
                        className="round"
                        
                    />
                    <p className="petit">L'église qui fête ses mille ans, et le charme du village sont à découvrir à pied en se perdant dans les petites rues.</p>
                    <p className="petit">Le patrimoine naturel est aussi à l'honneur avec la présence de nombreux oiseaux et leurs chants mélodieux. La réserve naturelle comporte de nombreux animaux ainsi que la Rotja, rivière qui a donné son nom à la vallée</p>
                </article>
                <article>
                    <h3 className='rando'>Une gastronomie à déguster</h3>
                    <img
                        src={gastronomie}
                        alt="fromages frais avec des framboises"
                        className="round"
                        
                    />
                    <p className="petit">La vallée de la Rotja est riche de nombreux  produits locaux des artisans des Pyrénées Orientales. Notre cuisine favorise et présente ce savoir faire pour vous en faire pleinement profiter.</p>
                    <p className="petit">Vous retrouverez également notre sélection à l'épicerie. Vous pouvez également vous désaltérer à notre bar</p>
                </article>
            </section>
            <iframe
                title="carte google map de l'emplacement de l'auberge"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477969.4996544556!2d0.9861635206922985!3d43.655258811931944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a557359b27243f%3A0x60f615d79a05ab05!2sAlberg%20de%20Pi%20de%20Conflent!5e0!3m2!1sfr!2smk!4v1663679867466!5m2!1sfr!2smk"
                className='iframe'
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
            
        </section>
    )
}

export default Home