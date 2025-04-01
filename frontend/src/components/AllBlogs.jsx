import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Message from './Message';
import { Row, Col } from 'react-bootstrap';
import Paginate from './Paginate';

import { useGetBlogsQuery } from '../slices/blogsApiSlice';
import Blog from './Blog';

const AllBlogs = () => {
    const { pageNumber, keyword } = useParams();

    const { data, isLoading, error } = useGetBlogsQuery({
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
                    <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Insights & Innovations</h1>
                    <Row>
                        {data.blogs.map((blog) => (
                            <Col key={blog._id} sm={12} md={12} lg={6} xl={6}>
                                <Blog blog={blog} />
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

export default AllBlogs;