import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './ItemDetail.module.css';
import products from '../../data.json';

const ItemDetail = () => {
    const [wine, setWine] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const foundItem = products.find((item) => item.id === Number(id));

        if (foundItem) {
            setWine(foundItem);
        } else {
            // Handle the case when the item with the specified ID is not found.
            // You can display an error message or redirect to a not-found page.
        }
    }, [id]);

    if (!wine) {
        // You can render a loading indicator or an error message here
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={style.detailDiv}>
                <img className={style.detailImg} src={wine.image} alt={wine.name} />
                <div>
                    <h2>{wine.name}</h2>
                    <p className={style.detailP}>Grape: {wine.grape}</p>
                    <p className={style.detailP}>Price: ${wine.price}</p>
                    <p className={style.detailP}>Description: {wine.description}</p>
                    {wine.sale ? <p className={style.detailP}>Sale: Yes</p> : <p className={style.detailP}>Sale: No</p>}
                </div>
            </div>
            <div className={style.buttonDiv}>
                <Link to={'/shop'}>
                <button>Back to store</button>
                </Link>
            </div>
        </>
    );
};

export default ItemDetail;

