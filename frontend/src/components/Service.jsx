import { Card, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Service = ({ service }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  
  return (
    <>
      {service.status ? (
        <Card className='my-3 p-3 rounded'>
            <Row key={service._id}>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Link to={`/service/${service._id}`}>
                <Card.Img src={service.image} variant='top' />
              </Link>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Link to={`/service/${service._id}`}>
                  <Card.Title as='div' className='service-title'>
                    <strong>{service.name}</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'>
                  <Rating
                    value={service.rating}
                    text={`${service.numReviews} reviews`}
                  />
                </Card.Text>
                <Card.Text as='small'>{truncateText(service.oneLine, 45)}</Card.Text>
              </Col>
            </Row>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default Service;
