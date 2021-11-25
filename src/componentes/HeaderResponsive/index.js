import './styles.css';
import {faBars , FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function HeaderResponsive (){
    const [active, setActive] = useState(false);

    function openMenu(event){
        event.preventDeFault();
        setActive(!active);
        console.log("abriu aqui");
    }

    return(
        <div className="header">
            <div className="menu-hamburguer" onClick={openMenu}>
                <faLongAwesomeIcon icon={faBars} color="#f4f4f4" size="gl"/>
            </div> 
            
            <ul className={`menu-options${active ? 'active' : ''}`}> 
                <li><a href="/">Home</a></li>
                <li><a href="/">Personagens</a></li>
                <li><a href="/">Episódios</a></li>
                <li><a href="/">Sobre</a></li>
            </ul>
        </div>
    );       
}
export default HeaderResponsive;