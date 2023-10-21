import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import style from './Checkout.module.css';
import products from '../../data.json';
import swal from 'sweetalert';


function Checkout() {
  const { clearCart, cart, removeProduct, totalPrice } = useContext(CartContext);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [cartDetails, setCartDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve product details for the items in the cart
    const cartItemsWithDetails = cart.map((item) => {
      const product = products.find((p) => p.id === item.id);
      return {
        ...item,
        ...product,
      };
    });
    setCartDetails(cartItemsWithDetails);
  }, [cart]);

  const renderCartItems = () => {
    return cartDetails.map((p) => (
      <div className={style.productDiv} key={p.id}>
        <img className={style.cartImg} src={p.image} alt={p.name} />
        <div className={style.detailDiv}>
          <p><span>Product:</span> {p.name}</p>
          <p><span>Price(unit):</span> ${p.price}</p>
          <p><span>Qty:</span> {p.quantity}</p>
          <p><span>Total product(s) price:</span> ${p.price * p.quantity}</p>
        </div>
      </div>
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the data in local storage
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);

    // Clear the cart
    clearCart();

    // Show a congrats message
		swal({
			title: "Want to confirm your purchase?",
			text: "Click Ok!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				swal({
					title: "Thank you!",
					icon: "success",
				});
				navigate(`/shop`);
			} else {
				swal("continue shopping!", "info");
			}
		});

    // // Redirect to the home page
    // window.location.href = '/';
  };

  return (
    <div className={style.orderCheckout}>
      <div>
        {renderCartItems()}
      </div>
      <div className={style.checkoutDiv}>
        <p>Total: ${totalPrice()}</p>
        <h2>Billing information</h2>
        <form onSubmit={handleSubmit} className={style.checkoutForm}>
          <label>Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label>Lastname:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button type="submit">Complete Purchase</button>
          <Link to="/">
            <button>Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

