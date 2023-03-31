import React, {Component} from "react";
import "./navbar.css";
import logo from "../../images/logo-dit.png";


class NavBar extends Component {

    

    render()
    {
        return <React.Fragment>
            <div className="nav">
            <img  className="imageLogo" src={logo} alt="logo daara it " style={{}}/>
            <h2 className="titre" style={{display : "inline-block", marginTop  : 10}}> Daara IT</h2>
                     <nav className="menu" > 
                        <ul>
                            <li>Accueil</li>
                            <li>A propos</li>
                            <li>Forum</li>
                            <li>Evenements</li> 
                            <li>Commissions</li> 
                            <li>Galerie</li> 
                            <li>Contact</li>
                        </ul>
                    </nav>
            </div>
        </React.Fragment>
    }

}

export default NavBar