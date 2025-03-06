import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopServicesQuery } from '../slices/servicesApiSlice';
import { MdArrowBackIos, MdArrowForwardIos  } from "react-icons/md";
const ServiceCarousel = () => {
  const { data: services, isLoading, error } = useGetTopServicesQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='mb-4'
      prevIcon={<MdArrowBackIos size={50} color="lightseagreen" />} // Custom previous icon
      nextIcon={<MdArrowForwardIos  size={50} color="lightseagreen" />} // Custom next icon
    >
      {services.map((service) => (
          (service.status === true) ? (
            <Carousel.Item key={service._id}>
              <Link to={`/service/${service._id}`}>
                <Image src={service.image} alt={service.name} fluid />
                <Carousel.Caption className='carousel-caption'>
                  <h3 className='text-white text-right'>
                    {service.name}
                  </h3>
                  <p>{service.oneLine}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ) : ( 
            <span key={service._id}></span>
          )
      ))}
    </Carousel>
  );
};

export default ServiceCarousel;
