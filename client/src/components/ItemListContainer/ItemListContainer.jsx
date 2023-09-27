import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import style from './ItemListContainer.module.css';
import ItemCard from '../ItemCard/ItemCard'

const ItemListContainer = () => {

    return (
        <div className={style.cardContainer}>
            <ItemCard />
        </div>
    );
};

export default ItemListContainer;
