import React from 'react';
import Banner from '../../Images/Happy doctor.jpg'

const Home = () => {
    return (
        <div className="container" >
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 ">
                    <img className="w-100" src={Banner} alt="" />
                </div>
                <div className="col-md-6 justify-content-center align-items-center">
                    <h1 className="h1 font-weight-bold text-uppercase">we <span className="text-primary">care</span> <br /> for your <span className="text-primary">Health</span></h1>
                    <p className="font-italic font-weight-bold">We at JHealthcare are always fully focused on helping your to overcame any surgeon procedure, with great commitment and easy recovery.We will also  provide you the medical services so that you can trust us.

                    </p>
                </div>
            </div>



        </div>
    );
};

export default Home;