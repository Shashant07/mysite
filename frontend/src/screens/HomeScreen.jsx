import { Container } from 'react-bootstrap';
import AllProducts from '../components/AllProducts';
import AllServices from '../components/AllServices';
import Tagline from '../components/Tagline';
// import ProductCarousel from '../components/ProductCarousel';
import AboutUs from '../components/AboutUs';
import ServiceCarousel from '../components/ServiceCarousel';
// import MessageScreen from './MessageScreen';

const HomeScreen = () => {

  return (
    <>
      <Container>
        <ServiceCarousel />
        <AboutUs />
        <AllServices />
      </Container>
      <Tagline />
      <Container>
        <AllProducts />
      </Container>
      {/* <MessageScreen /> */}
    </>
  );
};

export default HomeScreen;
