import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const serviceDetails = details.filter(detail => detail.id === id)
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg">
                    <h5 className="card-title">id:{id}</h5>
                    <img src={serviceDetails[0]?.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Service:{serviceDetails[0]?.name}</h5>
                        <p className="card-text">Description:{serviceDetails[0]?.description}</p>
                        <p className="card-text">Price:{serviceDetails[0]?.price}</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;