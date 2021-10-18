import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const { id } = useParams();
    const [employeesDetails, setEmployeesDetails] = useState([])
    const [singleDetails, setSingleDetails] = useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setEmployeesDetails(data))

    }, [])

    useEffect(() => {
        const foundEmployee = employeesDetails.filter(td => td.id === id)
        setSingleDetails(foundEmployee)
    }, [employeesDetails])


    return (
        <div>
            <h1>This is a service details page {id}</h1>
            <h2>Name:{singleDetails?.name}</h2>

        </div>
    );
};

export default ServiceDetails;