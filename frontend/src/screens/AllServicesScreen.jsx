import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Container } from 'react-bootstrap';
import Paginate from '../components/Paginate';

import { useGetServicesQuery } from '../slices/servicesApiSlice';
// import Service from '../components/Service';
import ServiceCarousel from '../components/ServiceCarousel';
import AllServices from '../components/AllServices';

const AllServicesScreen = () => {
    const { pageNumber, keyword } = useParams();

    const { data, isLoading, error } = useGetServicesQuery({
        keyword,
        pageNumber,
    });
    return (
        
        <Container>
            {!keyword ? (
                <>
                    <ServiceCarousel />
                </>
            ) : (
                <Link to='/' className='btn btn-light mb-4'>
                    Go Back
                </Link>
            )}
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>
            ) : (
               <AllServices />
            )}
        </Container>
    )
}


export default AllServicesScreen