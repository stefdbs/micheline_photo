import React from 'react';

//Composants Bannière comportant une grande image et 1 formulaire, appelé sur la page Contact et qui appelle un autre components Form

const BannerContact = ({ image, form }) => {
    return (
        <div className="BannerContact">

            <img src={image} alt="Banner de Contact" />

            <h2>{form}</h2>
        </div>
    );
};

export default BannerContact;