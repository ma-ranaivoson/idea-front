import { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Header(): ReactElement {

    const [isActive, setActive] = useState(false);

    const desktopNav: ReactElement = (<div className="header">
        <div className="logo">
            <img src={"/assets/icon.png"} alt="" className="logo-image" />
            <p className="logo-text">Being unique is better <br />than being perfect</p>
        </div>
        <div className="main-nav">
            <ul className="main-nav-list">
                <li className="nav-list">
                    <Link to='/' className="nav-list_style-removed">Accueil</Link>
                </li>
                <li className="nav-list">
                    <Link to='/about-us' className="nav-list_style-removed">Qui sommes-nous? </Link>
                </li>
                <li className="nav-list">
                    <Link to='/tech' className="nav-list_style-removed">Nos services</Link>
                </li>
                <li className="nav-list contact">
                    <Link to='/contact' className="nav-list_style-removed">Nous contacter</Link>
                </li>
            </ul>
        </div>
    </div>);

    const mobileNav: ReactElement = (
        <div className="header-mobile">
            <FontAwesomeIcon icon={faBars} className="header-bars" size="2x" onClick={() => setActive(!isActive)} />
            <img src={"/assets/icon.png"} alt="" className="logo-image-mobile" />
            <button className="red-button"><Link to="/contact" className="remove-style">Nous contacter</Link></button>
        </div>
    );

    const leftNav: ReactElement = (
        <div className={`left-nav ${isActive ? 'left-nav-active' : ''}`}>
            <span className="left-nav-close" onClick={() => setActive(!isActive)}><FontAwesomeIcon icon={faTimes} size="3x" /></span>
            <ul className="nav-mobile">
                <li className="nav-mobile-list">
                    <Link to='/' className="remove-style" onClick={() => setActive(!isActive)}>Accueil</Link>
                </li>
                <li className="nav-mobile-list">
                    <Link to='/about-us' className="remove-style" onClick={() => setActive(!isActive)}>Qui sommes-nous? </Link>
                </li>
                <li className="nav-mobile-list">
                    <Link to='/tech' className="remove-style" onClick={() => setActive(!isActive)}>Nos Services</Link>
                </li>
                <li className="nav-mobile-list">
                    <Link to='/contact' className="remove-style" onClick={() => setActive(!isActive)}>Nous contacter</Link>
                </li>
            </ul>
        </div>
    );

    return (
        <>
            {desktopNav}
            {mobileNav}
            { isActive && <div className={`${isActive ? 'backdrop' : ''}`}></div> }
            {leftNav}
        </>
    )
}

export default Header
