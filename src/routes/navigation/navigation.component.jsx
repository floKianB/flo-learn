import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './navigation.styles.scss';

import FloLogo from '../../assets/images/Flo-logo.png';
import account from '../../assets/images/account.svg';
import notification from '../../assets/images/notification.svg';
import favorite from '../../assets/images/favorite.svg';

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
    const { isCartOpen } = useContext(CartContext)

    // const signOutHandler = async () => {
    //     await signOutUser()
    //     Notify('error', "Signed Out successfully")
    // }
    return(
        <>
            <nav className="navigation">
                <div className="left-side">
                    <Link className="logo-container" to='/'>
                        <img className="logo" src={FloLogo} alt='logo' />
                    </Link>
                    <p>Categories</p>
                </div>
                

                <div className="right-side">
                    <Link className={`nav-link ${route === '/shop' ? 'active' : ''}`} to='/courses'>Contact Us</Link>
                    <Link className={`nav-link ${route === '/shop' ? 'active' : ''}`} to='/courses'>New Learning</Link>
                    {
                        currentUser ? <Link className={`nav-link ${route === '/shop' ? 'active' : ''}`} to='/classes'>My Classes</Link> : null
                    }
                    <img src={favorite} alt="favorite" className="favorite-icon"/>
                    <CartIcon />
                    <img src={notification} alt="notification" className="notification-icon"/>
                    <img src={account} alt="account" className="account-icon"/>
                </div>
            </nav>
            { isCartOpen && <CartDropdown /> }
            <ToastContainer style={{marginTop: '50px'}} autoClose={2500} />
            
            <Outlet/>
        </>
    );
}

export default Navigation;