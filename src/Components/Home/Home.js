import React, { useEffect, useState } from 'react';
import Banner from '../../Images/Happy doctor.jpg'
import Service from '../Service/Service';
import Specialist from '../Specialist/Specialist';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
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
            <div className="container mx-auto mt-5 bg-light">
                <h2 className=" fw-bolder">Explore Our <span className="text-primary">Health</span> services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        services.map(service => <Service service={service}></Service>)
                    }

                </div>
            </div>

            <div className="mt-5 bg-light">
                <h2 className=" fw-bolder">Our <span className="text-primary">Experts</span></h2>
                <Specialist></Specialist>
            </div>

            <div className="mt-5 bg-light">
                <h2 className="fw-bolder mb-2">Patient <span className="text-primary">Testimonials</span></h2>
                <Testimonials></Testimonials>
            </div>


        </div>
    );
};

export default Home;