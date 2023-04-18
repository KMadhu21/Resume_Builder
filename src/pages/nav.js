import React from "react";
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <div className="container-fluid g-0">
            <div className="row g-0 nav">
                <div className="col-md-3">
                    <h1 style={{color:"#05445E"}}>Resume <span style={{color:"#FB4570"}}>Builder</span></h1>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-3 navli">
                    <ul>
                        <Link to='/' style={{textDecoration:"none"}}><li>Home</li></Link>
                        <Link to='/login' style={{textDecoration:"none"}}><li>Login</li></Link>
                        <Link to='/contact' style={{textDecoration:"none"}}><li>Contact</li></Link>
                        <Link to='/craeteres' ></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nav;