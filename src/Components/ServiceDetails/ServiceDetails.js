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
        <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className="w-50">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >Service:{name}</strong></p>
                            <p className="card-text"> <strong>Description:</strong> {description}</p>

                            <p className="text-nowrap"><strong >Price:</strong> $ {price}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default ServiceDetails;