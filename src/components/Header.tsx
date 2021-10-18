import React, { ReactElement } from 'react'

function Header(): ReactElement {
    return (
        <div className="header">
            <div className="logo">
                <img src={"/assets/icon.png"} alt="" className="logo-image" />
                <p className="logo-text">Being unique is better <br />than being perfect</p>
            </div>
            <div className="main-nav">
                <ul className="main-nav-list">
                    <li className="nav-list">
                        Accueil
                    </li>
                    <li className="nav-list">
                        Qui sommes-nous?
                    </li>
                    <li className="nav-list">
                        Tech et Methodes
                    </li>
                    <li className="nav-list contact">
                        Nous contacter
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
