import React from 'react';
import { Link } from 'react-router-dom';
import Favicon from '../../Images/instrument.png'
import toplogo from '../../Images/icon.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="container">

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

                            {user.email && <span style={{ color: 'Green', backgroundColor: 'white' }}>Hello, {user.displayName}</span>}
                            {user.email ? <button className="btn btn-warning me-2" onClick={logOut}>logout</button>

                                :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>}


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;