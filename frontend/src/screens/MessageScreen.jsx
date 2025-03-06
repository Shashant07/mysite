import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import contactus from '../assets/contactus.jpg';

// import { useRegisterMutation } from '../slices/usersApiSlice';
import { useSendMessageMutation } from '../slices/messagesApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const MessageScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const [nameCheck, setNameCheck] = useState('Enter your name');
  const [emailCheck, setEmailCheck] = useState('Enter your email');


  const dispatch = useDispatch();

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await sendMessage({ name, email, subject, description }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('Message sent successfully');
      setName('');
      setEmail('');
      setSubject('');
      setDescription('');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }

  };

  const onInputChange = (ip, type) => {
    if (type === 'name') {
      if (ip.length < 3 && ip.length !== 0) {
        setNameCheck('Name should be at least 3 characters long');
      } else {
        setNameCheck('Enter your name');
      }
      setName(ip);
    } else if (type === 'email') {
      const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (patt.test(ip) || ip.length === 0) {
        setEmailCheck('Enter your email');
      } else {
        setEmailCheck('Invalid email');
      }
      setEmail(ip);
    } else if (type === 'subject') {
      setSubject(ip);
    } else if (type === 'message') {
      setDescription(ip);
    } else {
      console.log('no ip')
    }
  }


  return (
    <Container>
      <section className="section contact">
      <h1 className="card-title my-4" style={{ fontWeight: "bold", letterSpacing: "2px" }}>Contact us</h1>
      <h5>Have any questions? We'd love to hear from you.</h5>
      <div className="row gy-4">
        <div className="col-lg-6">
          <div className="row">
            <img src={contactus} alt="contact us" className='contactUsImage' />
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 text-center'>
                <h6><strong>Have a general questions?</strong></h6>
                <Link className='contact-form-link' to={'/faq'}>Check our FAQs</Link>
                <br />
                <br />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 text-center'>
                <h6><strong> Contact us</strong></h6>
                <p><FaEnvelope /><Link className='contact-form-link' to='mailto:planet1.official@outlook.com'> planet1.official@outlook.com</Link></p>
                <p><FaPhone /><Link className='contact-form-link' to='tel:+91 9637744229'> +91 9637744229</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card p-4" style={{ background: 'transparent', border: 'none' }}>
            <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={submitHandler}>
              <div className="row gy-4">
                <div className="col-md-6">
                  {(nameCheck.length < 16) ? <span style={{ display: 'none' }}>{nameCheck}</span> : <span style={{ display: 'block', color: '#ff7f7f' }}>{nameCheck}</span>}
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required onChange={(e) => onInputChange(e.target.value, 'name')} value={name} />
                </div>
                <div className="col-md-6 ">
                  {(emailCheck.length > 15) ? <span style={{ display: 'none' }}>{emailCheck}</span> : <span style={{ display: 'block', color: '#ff7f7f' }}>{emailCheck}</span>}
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required onChange={(e) => onInputChange(e.target.value, 'email')} value={email} />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required onChange={(e) => onInputChange(e.target.value, 'subject')} value={subject} />
                </div>
                <div className="col-12">
                  <h6>How can we help you?</h6>
                  <textarea className="form-control" name="message" rows="4" placeholder="I would like to know about..." required onChange={(e) => onInputChange(e.target.value, 'message')} value={description}></textarea>
                </div>
                <div className="col-12 text-center">
                  <Button disabled={isLoading} type='submit' variant='primary'>Send Message</Button>
                  {isLoading && <Loader />}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
    </Container>
  );
};

export default MessageScreen;
