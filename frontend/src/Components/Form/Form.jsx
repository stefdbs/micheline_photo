import React, { useState, useEffect } from 'react';

//Création d'un composant form (sans props), qui sera appelé dans la page Contact au sein de l'appel du componenent BannerContact

const Form = () => {

    //Pour éviter le rafraichissement de la page quand on "Submit" et afficher un message
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageAffiche(true)
    };

    //pour la liste deroulante, garder l'état de la selection
    const [selectValue, setSelectValue] = useState('');
    const handleSelectChange = (e) => {
        setSelectValue(e.target.value);
    };
    // pour faire disparaitre le message de validation apres 3sec
    const [messageAffiche, setMessageAffiche] = useState(false);
    useEffect(() => {
        if (messageAffiche) {
            const timer = setTimeout(() => {
                setMessageAffiche(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    },
        [messageAffiche]);



    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__question">
                    <label>Pour toute demande d'information: </label>
                </div>
                <div className="form__question">
                    <label >Prénom: </label>
                    <input type="text" name="firstName" id="firstName" required />
                </div>
                <div className="form__question">
                    <label >Nom: </label>
                    <input type="text" name="lastName" id="lastName" required />

                </div>
                <div className="form__question">
                    <label >Adresse: </label>
                    <input type="text" name="address" id="address" required />

                </div>
                <div className="form__question">
                    <label >Ville: </label>
                    <input type="text" name="city" id="city" required />

                </div>
                <div className="form__question">
                    <label >Email: </label>
                    <input type="email" name="email" id="email" required />

                </div>
                <div className="form__question">
                    <label>Choisissez une prestation:</label>
                    <select value={selectValue} onChange={handleSelectChange}>
                        <option value="">Sélectionnez une prestation</option>
                        <option value="Mariage">Mariage</option>
                        <option value="Grossesse">Grossesse</option>
                        <option value="Concert">Concert</option>
                        <option value="Voyage">Voyage</option>
                        <option value="Fête de Village">Fête de Village</option>
                        <option value="Naissance">Naissance</option>
                        <option value="Autres">Autres</option>
                    </select>
                </div>
                <div className="form__question">
                    <label >Votre Message: </label>
                    <textarea type="textarea" name="textarea" id="textarea" required />

                </div>
                <div className="form__submit">
                    <input type="submit" value="Envoyer !" id="message" />
                </div>
            </form>
            {messageAffiche && <p className="message">Merci pour votre message !</p>}
        </div>

    );
};

export default Form;

