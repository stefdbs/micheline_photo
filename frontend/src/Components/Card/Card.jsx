import React, { useState } from 'react';

//création d'une carte contenant la liste des prestations appelés avec les props dans la page Home

//import du composant PopUp qui apparait sur la card au passage de la souris
import CardPopUp from './CardPopUp';


const Card = ({ image, title, description }) => {
    const [isPopUpVisible, setPopUpVisible] = useState(false);

    const handleMouseEnter = () => {
        setPopUpVisible(true);
    }

    const handleMouseLeave = () => {
        setPopUpVisible(false);
    }

    return (
        <li className="Card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img src={"http://localhost:3000/images_presta/" + image} alt="from Micheline" />
            <div className="Card-sombre"></div>
            <h2>{title}</h2>

            <CardPopUp description={description} isVisible={isPopUpVisible} />
        </li>
    );
};

export default Card;