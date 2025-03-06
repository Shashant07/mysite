import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationDot, FaEnvelope, FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import logo from '../assets/p1logo.png'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-element'>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6} className='mt-4 mb-2'>
              <h2 className='footerSiteHeading'><img className='footerLogo' src={logo} alt='logo' /><span>Planet1</span></h2>
              <h5 className='footerQuickLinks'>Empowering your digital journey</h5>
              <p className='footerQuickLinks'>Connect with us to build your digital presence and explore our solutions.</p>
              <div className="footer-icons my-4">
                <Link className='footerSocialLinks' to="#">
                  <FaFacebook />
                </Link>
                <Link className='footerSocialLinks' to="https://www.instagram.com/planet1.official" target="_blank">
                  <FaInstagram />
                </Link>
                <Link className='footerSocialLinks' to="https://www.youtube.com/@planet1.official" target="_blank">
                  <FaYoutube />
                </Link>
                <Link className='footerSocialLinks' to="https://wa.me/9637744229?" target="_blank">
                  <FaWhatsapp />
                </Link>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className='mt-4 mb-2'>
              <h5 className='footerQuickLinks'>🌍 Quick Links</h5>
              <p className='footerQuickLinks' >
                <Link to={'/'}>🔹 Home</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/about'}>🔹 About Us</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/services'}>🔹 Services</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/products'}>🔹 Products</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/portfolio'}>🔹 Portfolio</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/blogs'}>🔹 Blogs</Link>
              </p>
            </Col>
            <Col lg={3} md={6} sm={6} className='mt-4 mb-2'>
            <h5 className='footerQuickLinks'>📌 Stay Informed</h5>
              <p className='footerQuickLinks' >
                <Link to={'/faq'}>🔹 FAQs & Support</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/careers'}>🔹 Careers</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/messages'}>🔹 Contact Us</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/policy'}>🔹 Privacy Policy</Link>
              </p>
              <p className='footerQuickLinks' >
                <Link to={'/tandc'}>🔹 Terms and Conditions</Link>
              </p>
            </Col>
            <Col lg={3} md={6} sm={6} className='mt-4 mb-2'>
              <h5 className='footerGetInTouch'>Get in Touch</h5>
              <p className='footerGetInTouch'><FaLocationDot /> Nagpur, India</p>
              <p className='footerGetInTouch'><FaPhone /> <Link to="tel:+91 9637744229"> +91 9637744229</Link></p>
              <p className='footerGetInTouch'><FaEnvelope /> <Link to="mailto:planet1.official@outlook.com"> planet1.official@outlook.com</Link></p>
            </Col>
            <hr />
            <p className="footer-company-name"><Link to='/'>Planet1 &copy; {currentYear}</Link></p>
          </Row>
         
        </Container>
    </footer>
  );
};
export default Footer;
