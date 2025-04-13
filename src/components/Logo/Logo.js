import React from "react";
import { Tilt } from 'react-tilt'
import './Logo.css'
import logo from './Logo.png'
const Logo = () => {
    return(
        <div className="ma4 mt0 center">
        <Tilt className="Tilt br4 shadow-2 center" options={{max : 35}} style={{ height: 310, width: 250 }}>
            <div className="Tilt-inner pat3 center"><img style={{paddingTop: '5px'}}alt="logo" src={logo} /></div>
        </Tilt>
        </div>
    );
}
export default Logo;
