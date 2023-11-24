import React from 'react';
//Carousel défilant automatiquement sur la page home

//import et installation de la dépendance react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//création sans les props pour ne pas surcharger la page home
//appelé directement, sans props sur la page home

//Tableau contenant tout les chemins Public vers les photos du carousel
let photoCarouselArray = []
for (let index = 1; index < 11; index++) {
    photoCarouselArray.push("http://localhost:3000/images_carousel/carousel (" + index + ").jpg");
}

const BannerDefilante = () => {
    const settings = {
        dots: true, // Afficher les indicateurs de pagination
        infinite: true, // Permettre un défilement infini
        speed: 500, // Vitesse de transition (en millisecondes)
        slidesToShow: 1, // Nombre d'éléments à afficher à la fois
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,// Nombre d'éléments à faire défiler à chaque transition
        adaptiveHeight: true,
    };

    return (
        <div className="BannerDefilante">

            <Slider {...settings}>
                {
                    photoCarouselArray.map((photo) =>
                        <div key={photo[0]} >
                            < img src={photo} alt="carousel" className="carousel-image" />
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};
export default BannerDefilante;