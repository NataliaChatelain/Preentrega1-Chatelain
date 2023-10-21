import React from 'react';
import { CartContext } from '../Context/CartContext';
import style from './CartWidget.module.css';
import image from '../../assets/cartIcon.png';

const CartWidget = () => {
  const { totalProduct } = React.useContext(CartContext);

  return (
    <>
      <div className={style.cartWidget}>
        <div>
          <img className={style.cartIcon} src={image} alt="cart icon" />
        </div>
        <div className={style.qtyDisplay}>{totalProduct()}</div>
      </div>
    </>
  );
};

export default CartWidget;
