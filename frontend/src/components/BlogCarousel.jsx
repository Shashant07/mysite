import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopBlogsQuery } from '../slices/blogsApiSlice';
import { MdArrowBackIos, MdArrowForwardIos  } from "react-icons/md";
import { truncateText } from '../utils/truncateText';

const BlogCarousel = () => {
  const { data: blogs, isLoading, error } = useGetTopBlogsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='mb-4'
      prevIcon={<MdArrowBackIos size={50} color="lightseagreen" />} // Custom previous icon
      nextIcon={<MdArrowForwardIos  size={50} color="lightseagreen" />} // Custom next icon
    >
      {blogs.map((blog) => (
        <Carousel.Item key={blog._id}>
          <Link to={`/blog/${blog._id}`}  className='carouselItems'>
            <div className="jumbotron  text-white rounded bg-dark row" style={{"borderRadius": "5px"}}>
              <div className="col-md-6 p-5">
                <h1 className="display-4 font-italic">{blog.title}</h1>
                <p className="lead my-3">{truncateText(blog.content, 80)}</p>
                {/* <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p> */}
              </div>
              <div className="col-md-6" style={{"margin": "auto"}}>
                <Image src={blog.image} alt={blog.title} fluid style={{"borderRadius":"5px"}}/>
         
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BlogCarousel;
