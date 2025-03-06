import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Container } from 'react-bootstrap';
import Paginate from '../components/Paginate';

import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import ProductCarousel from '../components/ProductCarousel';


const AllProductsScreen = () => {

    const { pageNumber, keyword } = useParams();

    const { data, isLoading, error } = useGetProductsQuery({
        keyword,
        pageNumber,
    });
    return (
        <Container>
            {!keyword ? (
                <>
                    <ProductCarousel />
                </>
            ) : (
                <Link to='/' className='btn btn-light my-4'>
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
                    <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Unique Creations</h1>
                    <Row>
                        {data.products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
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


export default AllProductsScreen