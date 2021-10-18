import React from 'react';
import { Link } from 'react-router-dom';
import Favicon from '../../Images/instrument.png'
import toplogo from '../../Images/icon.png'

const Header = () => {
    return (
        <div className="w-100">

            <div className="bg-light d-flex justify-content-center  mb-0">
                <div>
                    <img src={toplogo} style={{ height: '60px', width: '100px' }} alt="" />
                </div>
                <p className="h1 fw-bold ">JHealthcare</p>
            </div>

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
                                <Link to="/appointment" className="nav-link">Appointment</Link>
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