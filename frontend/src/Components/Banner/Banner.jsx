import React from 'react';

//Composants Bannière comportant une image et 1 texte de présentation appelé sur la page home

const Banner = ({ image, title }) => {
    return (
        <div className="Banner">
            <img src={image} alt="Banner de haut page" />
            <div className="Banner-sombre"></div>
            <h2>{title}</h2>
        </div>
    );
};

export default Banner;