import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Form,
  Container,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  useGetBlogDetailsQuery,
  useCreateBlogReviewMutation,
} from '../slices/blogsApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
// import { addToCart } from '../slices/cartSlice';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const BlogScreen = () => {
  const { id: blogId } = useParams();

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // const addToCartHandler = () => {
  //   dispatch(addToCart({ ...blog, qty }));
  //   navigate('/cart');
  // };

  const {
    data: blog,
    isLoading,
    refetch,
    error,
  } = useGetBlogDetailsQuery(blogId);

  const { userInfo } = useSelector((state) => state.auth);

  const [createBlogReview, { isLoading: loadingBlogReview }] =
    useCreateBlogReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createBlogReview({
        blogId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success('Review created successfully');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Container>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title={blog.title} description={blog.description} />
          <Row>
            <Col md={6}>
              <Image src={blog.image} alt={blog.title} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{blog.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={blog.rating}
                    text={`${Number(blog.rating.toFixed(1))} / 5  Ratings`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Category: {blog.category}</ListGroup.Item>
                
                <ListGroup.Item>
                  Description: {blog.content}
                </ListGroup.Item>

                <ListGroup.Item>{blog.tags}</ListGroup.Item>
                <ListGroup.Item>
                  <div className="my-4">
                    <Link className='text-dark m-3' to="#">
                      <FaFacebook title='Facebook'/>
                    </Link>
                    <Link className='text-dark m-3' to="https://www.instagram.com/planet1.official" target="_blank">
                      <FaInstagram title='Instagram' />
                    </Link>
                    <Link className='text-dark m-3' to={blog.youtube} target="_blank">
                      <FaYoutube title='Youtube'/>
                    </Link>
                    <Link className='text-dark m-3' to="https://wa.me/9637744229?" target="_blank">
                      <FaWhatsapp title='WhatsApp'/>
                    </Link>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className='review'>
            <Col md={6}>
              <h2>Reviews</h2>
              {blog.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {blog.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name} <span style={{"float": "right"}}><Rating value={review.rating}/></span> </strong>
                    <p><li>{review.comment}</li></p>
                    <p><small>{review.createdAt.substring(0, 10)}</small></p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>

                  {loadingBlogReview && <Loader />}

                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group className='my-2' controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          required
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className='my-2' controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          required
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingBlogReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
   </Container>
  );
};

export default BlogScreen;
