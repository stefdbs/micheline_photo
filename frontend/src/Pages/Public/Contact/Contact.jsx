import React from 'react'
import Form from '../../../Components/Form/Form'
import ImageContact from "@/Assets/Images/Pages/Contact/ImageContact.jpg";
import BannerContact from '../../../Components/Banner/BannerContact';

//Composant Banner appelé avec 1 image et 1 autre composant: form

const Contact = () => {

    return (
        <section className='sectionContact'>
            <BannerContact image={ImageContact} form={<Form />} />

        </section>
    )
}

export default Contact;