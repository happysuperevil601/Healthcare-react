import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, image, description, id } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Service:{name}</h5>
                        <p className="card-text">Description:{description}</p>
                        <Link to={`/purchaseService/${id}`}>
                            <button className="btn btn-primary">Purchase service</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;