import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import {
  useGetBlogsQuery,
  useDeleteBlogMutation,
  useCreateBlogMutation,
} from '../../slices/blogsApiSlice';
import { toast } from 'react-toastify';

const BlogListScreen = () => {
  const { pageNumber } = useParams();

  const { data, isLoading, error, refetch } = useGetBlogsQuery({
    pageNumber,
  });

  const [deleteBlog, { isLoading: loadingDelete }] =
    useDeleteBlogMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      try {
        await deleteBlog(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const [createBlog, { isLoading: loadingCreate }] =
    useCreateBlogMutation();

  const createBlogHandler = async () => {
    if (window.confirm('Are you sure you want to create a new blog?')) {
      try {
        await createBlog();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Container>
      <Row className='align-items-center'>
        <Col>
        <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Blogs</h1>
        </Col>
        <Col className='text-end'>
          <Button className='my-3' onClick={createBlogHandler}>
            <FaPlus /> Create Blog
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data.message}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Image</th>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.blogs.map((blog) => (
                <tr key={blog._id}>
                  <td><img src={blog.image} alt="Blogs" className='adminListBlogImg' /></td>
                  <td>{blog._id}</td>
                  <td>{blog.name}</td>
                  <td>₹ {blog.price}</td>
                  <td>{blog.category}</td>
                  <td>{blog.brand}</td>
                  <td>
                    <Button
                      as={Link}
                      to={`/admin/blog/${blog._id}/edit`}
                      variant='light'
                      className='btn-sm mx-2'
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(blog._id)}
                    >
                      <FaTrash style={{ color: 'white' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
    </Container>
  );
};

export default BlogListScreen;
