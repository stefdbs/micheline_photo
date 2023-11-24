import React from 'react';

import Logo from "@/Assets/Images/LogoMicheline.png";


const Footer = () => {
    return (
        <footer>
            <div className='containerFooter'>
                <img src={Logo} alt="Logo du footer" />
                <p>© 2023 Micheline Photographe. Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;