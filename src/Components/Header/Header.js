import React from 'react';
import { Link } from 'react-router-dom';
import Favicon from '../../Images/instrument.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/icon">
                        <img src={Favicon} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        JHealthcare
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/shop" className="nav-link">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/About" className="nav-link">About us</Link>
                            </li>
                            <button className="btn btn-primary me-2" >Log In</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;