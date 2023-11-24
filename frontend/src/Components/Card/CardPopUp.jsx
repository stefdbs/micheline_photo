import React from 'react';

//Composants faisant apparaitre un texte au survol de al sourie, appelés avec ses propos dans le composant Card

const CardPopUp = ({ description, isVisible }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className='CardPopUpContent'>
            <div className="CardPopUp">
                <h2>Prix de la prestation {description}</h2>

            </div>
        </div >
    );
}

export default CardPopUp;