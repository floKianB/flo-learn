import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './navigation.styles.scss';

import FloLogo from '../../assets/images/logo.png';

import { ToastContainer } from 'react-toastify';


import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Notify } from "../../utils/notify.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const route = useLocation().pathname;
    const { currentUser } = useContext(UserContext);
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutUser()
        Notify('error', "Signed Out successfully")
    }
    return(
        <>
            <nav className="navigation">
                <Link className="logo-container" to='/'>
                    <img className="logo" src={FloLogo} alt='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className={`nav-link ${route === '/' ? 'active' : ''}`} to='/'>HOME</Link>
                    <Link className={`nav-link ${route === '/shop' ? 'active' : ''}`} to='/shop'>SHOP</Link>
                    {
                        currentUser ? (
                            <Link className={`nav-link`} to='/' onClick={signOutHandler}>SIGN OUT</Link>
                        ) : (
                            <Link className={`nav-link ${route === '/authentication' ? 'active' : ''}`} to='/authentication'>SIGN IN</Link>
                        )
                    }
                </div>
                <div>
                    <CartIcon />
                </div>
            </nav>
            { isCartOpen && <CartDropdown /> }
            <ToastContainer style={{marginTop: '50px'}} autoClose={2500} />
            <Outlet/>
        </>
    );
}

export default Navigation;