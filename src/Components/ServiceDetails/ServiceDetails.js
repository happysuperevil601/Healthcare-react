import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const ServiceDetails = () => {
    let { id } = useParams();

    const [serviceDetails, setServiceDetails] = useState([])

    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        if (serviceDetails.length > 0) {
            const foundService = serviceDetails.filter(detail => detail.id === id)
            setSingleService(foundService);
        }

    }, [])

    return (
        <div>
            <h1>{id}</h1>
            <h1>Service Details coming soon</h1>
            <h2>service name:{singleService?.name}</h2>
        </div>
    );
};

export default ServiceDetails;