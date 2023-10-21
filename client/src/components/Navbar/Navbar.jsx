import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import image from '../../assets/logo.jpeg'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <>
            <div className={style.navbarDiv}>
                <div className={style.navbarLogo}>
                    <Link to='/'><img src={image} alt="grapes logo" /></Link>
                    <span>WINES OF ARGENTINA</span>
                    
                </div>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>HOME</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/makingthewine'>MAKING THE WINE</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>TYPES OF WINE</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>FAMOUS VINEYARDS</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/shop'>BUY WINE</Link>
                </p>
                <Link to='/cart'><CartWidget/></Link>
            </div>
        </>
    )
}

export default Navbar;