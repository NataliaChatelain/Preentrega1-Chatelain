import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import style from './ItemCard.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import products from '../../data.json'

const ItemCard = () => {


    const [wines, setWines] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(id ? products.filter(item => item.category === id) : products)
                    }, 1000)
                })
                setWines(data)
            } catch (error) {
                console.log('Error:', error)
            }
        }
        fetchData()
    }, [id])

    return (
        <>
            {wines.map((wine, index) => (
                <Link to={`/item/${wine.id}`}>
                    <div key={index} className={style.card}>
                        <img src={wine.image} alt={wine.name} />
                        <h2>{wine.name}</h2>
                        <p>Grape: {wine.grape}</p>
                        <p>Price: ${wine.price}</p>
                        {wine.sale ? <p>Sale: Yes</p> : <p>Sale: No</p>}
                    </div>
                </Link>
            ))}
        </>
    );
};

export default ItemCard;