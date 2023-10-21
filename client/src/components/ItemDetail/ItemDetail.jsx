import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './ItemDetail.module.css';
import products from '../../data.json';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

const ItemDetail = () => {
  const [wine, setWine] = useState(null);
  const { id } = useParams();

  const { addProduct } = useContext(CartContext);
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (count) => {
    setGoToCart(true);
    addProduct(wine, count);
  }

  useEffect(() => {
    const foundItem = products.find((item) => item.id === Number(id));

    if (foundItem) {
      setWine(foundItem);
    }
  }, [id]);

  if (!wine) {
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
          <p className={style.detailP}>Sale: {wine.sale ? 'Yes' : 'No'}</p>
        </div>
      </div>
      <div className={style.buttonDiv}>
        <Link to={'/shop'}>
          <button>Back to store</button>
        </Link>
        {goToCart ? (
          <Link to='/cart'>
            <button>Checkout</button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={wine.stock} onAdd={onAdd} />
        )}
      </div>
    </>
  );
};

export default ItemDetail;

