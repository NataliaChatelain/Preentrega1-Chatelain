import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import products from "../../data.json";
import style from "./ItemCart.module.css"

function ItemCart({ item }) {
    const { totalPrice, removeProduct, addProduct, cart } = useCart();

    const [cartDetails, setCartDetails] = useState([]);

    useEffect(() => {
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
            <div className={style.cartDiv}>
                <img className={style.cartImg} src={p.image} alt="" />
                <div>
                    <p><span>Product:</span> {p.name}</p>
                    <p><span>Price(unit):</span> ${p.price}</p>
                    <p><span>Qty:</span> {p.quantity}</p>
                    <p><span>Total product(s) price:</span> ${p.price * p.quantity}</p>
                    <div className="remov_add">
                        <button onClick={() => removeProduct(item.id)}>Delete</button>
                        <Link to={`/item/${item.id}`}>
                            <button>Add more</button>
                        </Link>
                    </div>

                </div>
            </div>

        ));
    };

    return (
        <div className={style.cartContainer}>
            {renderCartItems()}
        </div>
    );
}

export default ItemCart;
