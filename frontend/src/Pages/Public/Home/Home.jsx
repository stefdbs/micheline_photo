import React from 'react';
import { NavLink } from 'react-router-dom';
//Components
import Banner from "@/Components/Banner/Banner";
import BannerDefilante from '@/Components/Banner/BannerDefilante';
import Card from "@/Components/Card/Card";
//datas
import BannerImg from "@/Assets/Images/Pages/Home/MichelineAccueil.png";
import ListePrestations from "@/Assets/Api/Prestation.json";



const Home = () => {
    return (
        <section className='sectionHome'>

            <Banner image={BannerImg} title="Micheline recherche à inscrire dans ses photos tous ces petits détails qui rendent un évennement unique.
            La douceur d'une lumière naturelle, un éclat de rire spontané, les étoiles dans un regard ému...
            Elle immortalise, à la volée, avec humour et spontanéité et surtout,avec beaucoup de bienveillance, tous vos meilleurs moments. 
            " />

            <BannerDefilante />

            <ul className="listePrestation">
                {
                    ListePrestations.map((presta) =>
                        <NavLink key={presta.id} to={"/contact/"}>
                            <Card image={presta.cover} title={presta.title} description={presta.description} />

                        </NavLink>
                    )
                }
            </ul>

        </section>
    );
};

export default Home;