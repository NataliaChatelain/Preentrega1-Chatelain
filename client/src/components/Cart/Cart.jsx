import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import style from './Cart.module.css';

function Cart() {
  const { cart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="NoProductos">
        <p><Link to="/shop">There's no selected products, buy wine!</Link></p>
      </div>
    );
  }

  return (
    <div className={style.cartContainer}>
      <div className="CartItem">
        {cart.map((p) => <ItemCart key={p.id} item={p} />)}
      </div>
      <div className={style.cartPriceCheckout}>
        <p className={style.detailP}>Total: <span>${totalPrice()}</span></p>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
