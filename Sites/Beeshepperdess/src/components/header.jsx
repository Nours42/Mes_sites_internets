import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props)=>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={`/Album`}>Album</Link>
                    </li>
                    <li>
                        <Link to={`/Contact`}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;