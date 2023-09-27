import React from 'react';
import style from './CartWidget.module.css';
import image from '../../assets/cartIcon.png'

const CartWidget = () => {

  return (
    <div className={style.cartWidget}>
      <div><img className={style.cartIcon}src={image} alt="cart icon" /></div>
      <div className={style.qtyDisplay}>0</div>
    </div>
  );
};

export default CartWidget;