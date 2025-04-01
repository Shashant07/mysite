import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Container } from 'react-bootstrap';
import Paginate from '../components/Paginate';

import { useGetBlogsQuery } from '../slices/blogsApiSlice';
// import Blog from '../components/Blog';
import BlogCarousel from '../components/BlogCarousel';
import AllBlogs from '../components/AllBlogs';


const AllBlogsScreen = () => {

    const { pageNumber, keyword } = useParams();

    const { data, isLoading, error } = useGetBlogsQuery({
        keyword,
        pageNumber,
    });
    return (
        <Container>
            <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Our Blogs</h1><hr />
            {!keyword ? (
                <>
                    <BlogCarousel />
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
                <AllBlogs />
            )}
        </Container>

    )
}


export default AllBlogsScreen;