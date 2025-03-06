import { Button } from "bootstrap/dist/js/bootstrap.min";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StartModal = ({ show, handleClose }) => {
  return (
    <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex="-1">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content" style={{zIndex: '2333', background: 'rgba(15,15,15,0.9)', color: '#ffffff'}}>
          <div className="modal-header">
            <h4 className="modal-title">Bring Your Ideas to Life</h4>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body" style={{margin: 'auto 0', padding: '15px 0'}} >
            <Row style={{margin: '0 10px'}}>
              <Col sm={12} md={6} lg={4} xl={4}>
                <div className="card startModalCard">
                  <div className="card-body">
                    <h5 className="card-title">Professional Services to Boost Your Business</h5>
                    <p className="card-text">💡 Description: Get expert assistance in website development, video editing, presentations, and other digital solutions to enhance your business.<br /><br />📌 How to Get Started:<br />1️⃣ Choose the service that fits your needs.<br />2️⃣ Share your project details with us.<br />3️⃣ Our experts will handle everything with precision.</p>
                    <Link to={'/services'} onClick={handleClose}>Explore Our Services →</Link>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={4}>
                <div className="card startModalCard">
                  <div className="card-body">
                    <h5 className="card-title">Explore Our Unique Creations</h5>
                    <p className="card-text">💡 Description: Discover exclusive products designed to make your work easier, from templates to ready-to-use tools.<br /><br />📌 How to Get Started:<br />1️⃣ Browse our available products.<br />2️⃣ Select what suits your needs.<br />3️⃣ Purchase & start using instantly.</p>
                    <Link to={'/products'} onClick={handleClose}>View Our Products →</Link>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={4}>
                <div className="card startModalCard">
                  <div className="card-body">
                    <h5 className="card-title">Get a Custom Solution for Your Needs</h5>
                    <p className="card-text">💡 Description: Have a specific requirement? Whether it's automation, software development, or a unique project, we can create a tailored solution for you.<br /><br />📌 How to Get Started:<br />1️⃣ Tell us about your challenge or idea.<br />2️⃣ Our team will craft a personalized plan.<br />3️⃣ We’ll develop the perfect solution for you.</p>
                    <Link to={'/services'} onClick={handleClose}>Request a Custom Solution →</Link>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="text-center">
              <h4>📞 Need Help? Let’s Connect!</h4>
              <p>💬 Feel free to reach out to us anytime.</p>
              <Link to={'/messages'} className="btn btn-primary" onClick={handleClose}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default StartModal;
