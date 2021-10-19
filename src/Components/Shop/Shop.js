import React from 'react';
import machine1 from '../../Images/machine 1.jpg'
import machine2 from '../../Images/machine 2.jpg'
import machine3 from '../../Images/machine 3.jpg'

const Shop = () => {
    return (

        <div className="container">
            <h2><span className="text-primary text-bold">Medical</span> Items</h2>
            <div class="card-group">
                <div class="card">
                    <img src={machine1} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">Spirometer
                        </h3>
                        <span className="text-primary text-bold">$25</span>
                    </div>
                    <div className="card-footer text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="card">
                    <img src={machine2} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 class="card-title">Medi-Trance Electrode
                        </h5>
                        <span className="text-primary text-bold">$40</span>

                    </div>
                    <div className="card-footer text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="card">
                    <img src={machine3} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Blood Pressure Device</h5>
                        <span className="text-primary text-bold">$40</span>
                    </div>
                    <div class="card-footer text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Shop;