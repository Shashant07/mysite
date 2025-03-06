import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import aboutus from '../assets/aboutus.png';


const AboutUs = () => {
    return (
        <>
            <div className='about-us'>
                <h1 className="card-title text-center" style={{ fontWeight: "bold", letterSpacing: "2px", marginTop: "20px" }}>Our Startup Story</h1>
                <Card style={{ padding: '20px', background:'transparent', border: 'none' }}>
                <Row>
                    <Col lg={6} className='my-2'>
                        <Image src={aboutus} alt='about us' fluid className='about-us-img' style={{ borderRadius: '10px' }} />
                    </Col>
                    <Col lg={6} className='my-2'>
                        <h6><strong>✅ Who We Are</strong></h6>
                        <p>Planet1 was founded to help startups and businesses establish a strong online presence with high-quality web development, branding, and digital solutions. We simplify the digital journey, making it affordable, efficient, and results-driven.</p>
                        <p><strong>✅ Our Mission</strong> - <i>Helping startups & businesses launch and scale with modern digital solutions.</i></p>
                        
                        <p><strong>✅ Our Vision</strong> - <i>We want to be the go-to digital partner for businesses worldwide.</i></p>
                        
                        <h6><strong>✅ Core Values</strong></h6>
                        <h6>💡 Innovation<small> – We embrace creativity & technology to build future-ready solutions.</small></h6>
                        <h6>🤝 Customer-Centric<small> – Your success is our priority. We tailor solutions to your needs.</small></h6>
                        <h6>🚀 Scalable Growth<small> – We design solutions that grow with your business.</small></h6>
                        
                    </Col>
                    </Row>
                </Card>    
            </div>  
        </>
    )
}

export default AboutUs;