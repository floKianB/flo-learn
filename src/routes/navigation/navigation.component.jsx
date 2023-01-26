import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';

import FloLogo from '../../assets/images/logo.png';
import Cart from '../../assets/images/cart.png';

const Navigation = () => {
    return(
        <>
            <nav className="navigation">
                <Link className="logo-container" to='/'>
                    <img className="logo" src={FloLogo} alt='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/authentication'>SIGN IN</Link>
                </div>
                <div>
                    <img className="cart-icon" src={Cart} alt='logo' />
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navigation;