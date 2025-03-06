import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Message from './Message';
import { Row, Col } from 'react-bootstrap';
import Paginate from './Paginate';

import { useGetServicesQuery } from '../slices/servicesApiSlice';
import Service from './Service';

const AllServices = () => {
    const { pageNumber, keyword } = useParams();

    const { data, isLoading, error } = useGetServicesQuery({
        keyword,
        pageNumber,
    });
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>
            ) : (
                <>
                    {/* <Meta /> */}
                    <Row>
                        {data.services.map((service) => (
                            <Col key={service._id} sm={12} md={6} lg={4} xl={3}>
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
        </>
    )
}

export default AllServices;