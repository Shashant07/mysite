import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import { MdArrowBackIos, MdArrowForwardIos  } from "react-icons/md";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='mb-4'
      prevIcon={<MdArrowBackIos size={50} color="lightseagreen" />} // Custom previous icon
      nextIcon={<MdArrowForwardIos  size={50} color="lightseagreen" />} // Custom next icon
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}  className='carouselItems'>
          <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Image src={product.image} alt={product.name} fluid />
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-0 text-right">
                {/* <Carousel.Caption lg={6} className='carousel-caption'> */}
                <h3 className='carousel-text'>
                  {product.name}
                </h3>
                <h6 className='carousel-text'>@ ₹{product.price}</h6>
                {/* </Carousel.Caption> */}
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
