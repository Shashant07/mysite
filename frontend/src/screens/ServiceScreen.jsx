import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  useGetServiceDetailsQuery,
  useCreateServiceReviewMutation,
} from '../slices/servicesApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';

const ServiceScreen = () => {
  const { id: serviceId } = useParams();

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const contactUs = () => {
    // dispatch(addToCart({ ...service, qty }));
    navigate('/messages');
  };

  const {
    data: service,
    isLoading,
    refetch,
    error,
  } = useGetServiceDetailsQuery(serviceId);

  const { userInfo } = useSelector((state) => state.auth);

  const [createServiceReview, { isLoading: loadingServiceReview }] =
    useCreateServiceReviewMutation();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createServiceReview({
        serviceId,
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
          <Meta title={service.name} description={service.description} />
          <Row>
            <Col md={6}>
              <Image src={service.image} alt={service.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{service.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={service.rating}
                    text={`${Number(service.rating.toFixed(1))} / 5  Ratings`}
                  />
                </ListGroup.Item>
                {/* <ListGroup.Item>Price: $</ListGroup.Item> */}
                <ListGroup.Item>
                  Description: {service.description}
                </ListGroup.Item>
              </ListGroup>
              <Card>
                <ListGroup variant='flush'>
                  {/* <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {service.status ? 'Available' : 'Unavailable'}
                      </Col>
                    </Row>
                  </ListGroup.Item> */}

                  {/* Qty Select */}
                  {/* {service.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(service.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )} */}

                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={service.status === 'false'}
                      onClick={contactUs}
                    >
                      Contact Us
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className='review'>
            <Col md={6}>
              <h2>Reviews</h2>
              {service.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {service.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name} <span style={{"float": "right"}}><Rating value={review.rating}/></span> </strong>
                    <p><li>{review.comment}</li></p>
                    <p><small>{review.createdAt.substring(0, 10)}</small></p>
                    
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>

                  {loadingServiceReview && <Loader />}

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
                        disabled={loadingServiceReview}
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

export default ServiceScreen;
