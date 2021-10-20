import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const ServiceDetails = () => {
    let { id } = useParams();

    const [serviceDetails, setServiceDetails] = useState([])


    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then((data) => {
                const foundService = data.filter(detail => detail.id == id)
                setServiceDetails(foundService);
            })
    }, [])



    const { name, description, image, price } = serviceDetails[0] || {}
    return (
        <div>
            <div className="container w-25 mt-4">
                <div className="col ">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Service:{name}</h5>
                            <p className="card-text">Description:{description}</p>
                            <h5 className="card-text text-bold">Price:${price}</h5>
                        </div>

                    </div>
                </div>
            </div>





        </div>







    );
};

export default ServiceDetails;