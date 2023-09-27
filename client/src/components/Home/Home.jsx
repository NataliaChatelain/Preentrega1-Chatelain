import style from './Home.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import image from '../../assets/img/mendoza_principal.jpeg'

const Home = ({ wines }) => {

    return (
        <>
            <h1 className={style.h1Home}>Wines of Argentina</h1>
            <section >
                <img className={style.homeImg} src={image} alt="Viñedo Mendoza" />
            </section>
            <div>
                <p className={style.homeP}>
                    Our viticulture has more than five centuries of history, integrating the knowledge of the native peoples with
                    the tradition of European immigrants, and represents the industry of the most important sector in South America.
                    <b></b>
                    It began to be produced in Santiago del Estero, from the Moscatel and Uva País vines , coming from Spain. The
                    expansion of its cultivation continued hand in hand with the Jesuits and around 1598 there were vineyards in
                    Córdoba, Santa Fe, Buenos Aires and Misiones.
                    <b></b>
                    <b></b>
                    For their part, Mendoza and San Juan became key sites, since vines from Chile entered the territory there, which
                    already had a strong wine production at that time. Years later, Domingo Faustino Sarmiento introduced Malbec
                    from France, which, although in that country it was used to make cut wine (it was mixed with other varietals
                    just to give it color), in ours it quickly became acclimatized with excellent results. Today it has positioned
                    itself as the emblematic strain of Argentina and has more than 43,000 planted hectares.
                    <b></b>
                    <b></b>
                    Twenty years ago, the area cultivated with vines in the Argentine territory was concentrated in Mendoza and San
                    Juan. Today, Argentine viticulture extends to 19 provinces, almost the entire national territory and with a high
                    quality wine, even with soil and climate conditions that, in some cases, are disadvantageous.
                    <b></b>
                    There are 223,585 cultivated hectares with vineyards: Malbec , Cereza , Bonarda , Criolla Grande , Cabernet
                    Sauvignon , Syrah , Pedro Giménez , which represents 3% of the world surface and positions the country in fifth
                    place as a wine producer in the global ranking .
                    <b></b>
                    <b></b>
                    The wine is our National Beverage has been consolidated from social habits typical of Argentine culture and
                    identity rooted in the family
                    environment and friendship, where moderation and social control are combined with enjoyment. On November 24,
                    2010, Decree 1800 was signed, declaring it the national drink of Argentina, which is why that date is celebrated
                    as Argentine Wine Day .
                    <b></b>
                    In 2013 Law No. 26,870 - Argentine Wine National Drink was sanctioned , with the purpose of disseminating the
                    tradition and cultural characteristics involved in its production, preparation and consumption.
                </p>
            </div>
            <h1><Link to='/shop'>Check out our store!</Link></h1>
        </>
    )
}

export default Home;