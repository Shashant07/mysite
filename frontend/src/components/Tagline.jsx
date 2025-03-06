import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StartModal from './StartModal';

const Tagline = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StartModal show={showModal} handleClose={() => setShowModal(false)} />
      <div className='home-tagline'>
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8} xl={8} className='home-tagline-col1'>
              <p className='home-tagline-text1'><strong>Transforming ideas into powerful digital solutions.</strong></p>
              <p className='home-tagline-text2'><strong>📩 Let’s build something amazing together!</strong></p>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='home-tagline-col2'>
              <button className='btn btn-primary home-tagline-btn' onClick={() => setShowModal(true)}>
                Get Started →

              </button>

            </Col>
          </Row>

        </Container>
      </div>
    </>

  )
}

export default Tagline