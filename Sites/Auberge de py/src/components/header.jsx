import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <nav>
                <Link to='/'><p>Accueil</p></Link>
                <Link to='/restaurant'><p>Restaurant</p></Link>
                <Link to='/auberge'><p>Auberge</p></Link>
                <Link to='/contact'><p>Contact</p></Link>
            </nav>
            <h1>Bienvenue sur le site de l'auberge de Py</h1>
        </header>
    )
}

export default Header