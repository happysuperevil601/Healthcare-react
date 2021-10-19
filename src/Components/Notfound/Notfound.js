import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../Images/Notfound.jpg'

const Notfound = () => {
    return (
        <div className="container">

            <img src={notFoundImg} alt="" /><br />
            <Link to="/home"><button className="btn btn-primary">Go to Home</button></Link>


        </div>
    );
};

export default Notfound;