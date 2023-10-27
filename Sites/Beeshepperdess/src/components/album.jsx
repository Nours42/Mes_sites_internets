import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import image1 from '../assets/IMG/1.jpg';
import image2 from '../assets/IMG/2.jpg';
import image3 from '../assets/IMG/3.jpg';
import image4 from '../assets/IMG/4.jpg';
import image5 from '../assets/IMG/5.jpg';
import image6 from '../assets/IMG/6.jpg';
import image7 from '../assets/IMG/7.jpg';
import image8 from '../assets/IMG/8.jpg';
import image9 from '../assets/IMG/9.jpg';
import image10 from '../assets/IMG/10.jpg';
import image11 from '../assets/IMG/11.jpg';
import image12 from '../assets/IMG/12.jpg';
import image13 from '../assets/IMG/13.jpg';
import image14 from '../assets/IMG/14.jpg';
import image15 from '../assets/IMG/15.jpg';
import image16 from '../assets/IMG/16.jpg';


const Album = (props) => {

        /*************************************************************************************************/
        /* ****************************************** DONNEES ****************************************** */
        /************************************************************************************************/


        // La liste des slides du carrousel. (tableau d'objet, pour chaque objet je veux le nom de l'image et la legende)
        const slides = [
                { image: image1, legend: 'un apiculteur récolte du miel'             },
                { image: image2, legend: 'une abeille sur une tige de lavandin'      },
                { image: image3, legend: 'une ruche dont on a enlever la hausse'     },
                { image: image4, legend: 'une ruche un cadre sorti'                  },
                { image: image5, legend: 'des abeilles sur les cadres'               },
                { image: image6, legend: 'la reine au milieu des abeilles'           },
                { image: image7, legend: 'une abeille sur des fleurs jaunes'         },
                { image: image8, legend: 'des abeilles qui rentrent à la ruche'      },
                { image: image9, legend: 'un pot de miel'                            },
                { image: image10, legend: 'un cadre de ruche avec du miel'           },
                { image: image11, legend: 'des abeilles qui rentrent à la ruche'     },
                { image: image12, legend: 'quatre ruches peintes en couleur pastel'  },
                { image: image13, legend: 'des alvéoles de ruche'                    },
                { image: image14, legend: 'des alvéoles de ruche'                    },
                { image: image15, legend: 'un pot de miel et des quartiers d\'orange'},
                { image: image16, legend: 'des abeilles sur fond de soleil couchant' }
        ]

        const [numero, setNumero] = useState(0)

        return (
                <div>
                        <img src={slides[numero].image} alt={slides[numero].legend} /> 
                        <figcaption className="legend">{slides[numero].legend}</figcaption>
                        <nav>
                            <ul>
                                <li>
                                <button id="slider-previous"
                                        title="Image précédente"
                                        onClick={(e)=>{
                                                if((numero - 1) < 0){
                                                        setNumero(slides.length -1)
                                                } else {
                                                       setNumero(numero - 1) 
                                                }
                                        }}
                                ><FontAwesomeIcon icon={faArrowLeft} /></button></li>
                                <li>
                                <button id="slider-forward"
                                        title="Image suivante"
                                        
                                        onClick={(e)=>{
                                                if((numero + 1)=== slides.length){
                                                        setNumero(0)
                                                }else {
                                                        setNumero(numero+1)
                                                }
                                        }}
                                ><FontAwesomeIcon icon={faArrowRight} /></button></li>
                            </ul>
                        </nav>
                </div>
        )
}

export default Album