import React from 'react'
import AboutUs from '../components/AboutUs'
import { Container } from 'react-bootstrap'
import MessageScreen from './MessageScreen'
import FAQ from '../components/FAQ'

const AboutUsScreen = () => {
  return (
    <Container>
        <div className="mt-2 p-5 bg-secondary text-white rounded">
            <h1><strong>About Us</strong></h1>
            <p>Empowering businesses, students, and freelancers with top-notch digital solutions – from web development to creative services. Let's build something amazing together!</p>
        </div>
      <AboutUs />
      <FAQ />
      <MessageScreen />
    </Container>
  )
}

export default AboutUsScreen;