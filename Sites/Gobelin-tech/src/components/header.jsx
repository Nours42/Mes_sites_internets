import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <nav>
                <Link to='/'><p>Accueil</p></Link>
                <Link to='/products'><p>Créations</p></Link>
                <Link to='/contact'><p>Contact</p></Link>
            </nav>
            <h1>Gobelin Tech</h1>
        </header>
    )
}

export default Header