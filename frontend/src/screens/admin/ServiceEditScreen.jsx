import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetServiceDetailsQuery,
  useUpdateServiceMutation,
  useUploadServiceImageMutation,
} from '../../slices/servicesApiSlice';

const ServiceEditScreen = () => {
  const { id: serviceId } = useParams();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [oneLine, setOneLine] = useState('');
  const [s_Offering, setS_Offering] = useState('');
  const [s_Process, setS_Process] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  const {
    data: service,
    isLoading,
    refetch,
    error,
  } = useGetServiceDetailsQuery(serviceId);

  const [updateService, { isLoading: loadingUpdate }] =
    useUpdateServiceMutation();

  const [uploadServiceImage, { isLoading: loadingUpload }] =
    useUploadServiceImageMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // const offeringArr = typeof s_Offering === "string" ? s_Offering.split(",") : s_Offering;
    // const processArr = typeof s_Process === "string" ? s_Process.split(",") : s_Process;
    // console.log(offeringArr, processArr);
    // s_Offering.split(",").map(offering => offering.trim());
    // const processArr = s_Process.split(",").map(process => process.trim());
    try {
      await updateService({
        serviceId,
        name,
        image,
        oneLine,
        s_Offering,
        s_Process,
        category,
        description,
        status,
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
      toast.success('Service updated');
      refetch();
      navigate('/admin/servicelist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (service) {
      setName(service.name);
      setImage(service.image);
      setOneLine(service.oneLine);
      setS_Offering(service.s_Offering);
      setS_Process(service.s_Process);
      setCategory(service.category);
      setDescription(service.description);
      setStatus(service.status);
    }
  }, [service]);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadServiceImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to='/admin/servicelist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Service</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
                label='Choose File'
                onChange={uploadFileHandler}
                type='file'
              ></Form.Control>
              {loadingUpload && <Loader />}
            </Form.Group>

            <Form.Group controlId='oneLine'>
              <Form.Label>One liner description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter one liner description'
                value={oneLine}
                onChange={(e) => setOneLine(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='s_Offering'>
              <Form.Label>Service Offerings</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter offerings by comma saperated points'
                value={s_Offering}
                onChange={(e) => setS_Offering(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='s_Process'>
              <Form.Label>Service Process</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter processes by comma saperated points'
                value={s_Process}
                onChange={(e) => setS_Process(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='status'>
              <Form.Label></Form.Label>
              <Form.Control
                as='select'
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </Form.Control>
            </Form.Group>

            <Button
              type='submit'
              variant='primary'
              style={{ marginTop: '1rem' }}
            >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ServiceEditScreen;
