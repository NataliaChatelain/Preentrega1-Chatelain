import style from './MakingTheWine.module.css';
import { Link } from 'react-router-dom';
import React from 'react';


const MakingTheWine = () => {

    return (
        <>
            <div className={style.mainDiv}>

                <h1> Making the wine</h1>
                <section>
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/xsM5WPnivgM"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </section>
                <div>
                    <p>The basis of winemaking has remained virtually unchanged since its inception more than 6,000 years ago.
                        The method and technique is the same for red, white or rosé wine. What varies are some aspects such as
                        fermentation time and temperature. In addition to the use of the type of grape and its components.
                        The harvest is done by hand, cutting the grapes with special scissors that only cut the bunch, so as not
                        to tear the plant.
                        <b />
                        For red wine, the whole red grape is used: the must, the skin, the pulp and even the seeds.
                        The quality of red wine will be determined by the quality of the red grape.
                        <b />
                        For this reason, the climate, the qualities of the soil and even the manner in which the vines are
                        pruned over the years are important, since all this influences the quality of the grapes.
                    </p>
                </div>
                <h2>Where?</h2>
                <h3>Cuyana Region: Mendoza, San Juan and San Luis</h3>
                {/* <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441220.329757239!2d-69.97041298619969!3d-32.61772819238681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9678179e207f881f%3A0x1619a4b2ff1c823!2sCuyo!5e0!3m2!1ses-419!2sar!4v1669677596220!5m2!1ses-419!2sar"
                    width="1200" height="900" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
                <div>
                    <p>Cuyo is a geographical and historical region located in the central west of the Argentine Republic ,
                        traditionally made up of the provinces of Mendoza , San Juan and San Luis , whose limits practically
                        coincide with the geographical region and which share a common cultural identity and historical
                        tradition.
                        <b />
                        Since the signing of the Nuevo Cuyo Treaty at the beginning of 1988 , the province of La
                        Rioja nº 1 was incorporated into the Nuevo Cuyo Regionas a new member. However, it should be noted that
                        despite the signing of the treaty, it has not produced any significant change in the social and
                        traditional consideration, nor in the institutional one, of the Cuyanos, who consider La Rioja as part
                        of the Argentine northwest . In addition, due to the Mendoza and San Juan accent especially, in addition
                        to the idioms used, this region is very similar to the speech of the Rio de la Plata .
                        <b />
                        A mountainous relief with scarce vegetation predominates, with desert climatic characteristics. As
                        economic activity, the agricultural base predominates, highlighting the viticulture , being this area
                        the main producer of wines in Argentina, by volume of wines and cultivated area. 1 There is also a
                        growing offer of tourist services, related to the natural beauty of the region, and important (in
                        quantity and quality) higher level academic centers.
                    </p>
                </div>
            </div>
        </>
    )
}

export default MakingTheWine;