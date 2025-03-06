import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Container } from 'react-bootstrap';
import Paginate from '../components/Paginate';

import { useGetServicesQuery } from '../slices/servicesApiSlice';
import Service from '../components/Service';
import ServiceCarousel from '../components/ServiceCarousel';

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
                <>
                    {/* <Meta /> */}
                    <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Exclusive Offerings</h1>
                    <Row>
                        {data.services.map((service) => (
                            <Col key={service._id} sm={12} md={6} lg={6} xl={4}>
                                <Service service={service} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate
                        pages={data.pages}
                        page={data.page}
                        keyword={keyword ? keyword : ''}
                    />
                </>
            )}
        </Container>
    )
}


export default AllServicesScreen