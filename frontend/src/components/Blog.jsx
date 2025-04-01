import { Link } from 'react-router-dom';
import Rating from './Rating';
import { truncateText } from '../utils/truncateText';

const Blog = ({ blog }) => {
  return (
          <div className="card flex-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary ">{blog.category}</strong>
              <Link to={`/blog/${blog._id}`}>
                <h3 className="mb-0 text-dark">
                  {blog.title}
                </h3>
              </Link>
              <Rating
                value={blog.rating}
                text={`(${Number(blog.rating.toFixed(1))})`}
              />
              <small className="mb-1 text-muted">{(new Date(blog.createdAt)).toDateString()}</small>
              <p className="card-text mb-auto">{truncateText(blog.content, 80)}</p>
              <Link to={`/blog/${blog._id}`} style={{"textDecoration": "underline"}}>Continue reading</Link>
            </div>
            <img className="card-img-right flex-auto my-auto" src={blog.image}  alt="Thumbnail [200x250]"  style={{"width": "50%"}} />
          </div>     
  );
};

export default Blog;
