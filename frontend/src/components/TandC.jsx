import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TandC = () => {

    return (
        <Container className="section faq" id='faq'>
            <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Terms and Conditions</h1>
            <div className="card" style={{background:'transparent', border:'none'}}>
                <h6><strong>Last Updated: 6th March 2025</strong></h6>
                <p>Welcome to <strong>Planet1</strong>! These Terms and Conditions outline the rules and regulations for using our website and services. By accessing this website and using our services, you agree to comply with these terms. If you do not agree with any part of these terms, please refrain from using our website.</p>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="faq-group-2">

                        <div className="accordion-item" style={{background:'transparent'}} >
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-1" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>1. Definitions</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>"We," "Us," "Our" refer to Planet1, the owner of the website and services.</li>
                                        <li>"You," "User" refers to anyone accessing our website, purchasing products, or using our services.</li>
                                        <li>"Services" include web development, online solutions, digital content creation, consulting, and other professional services offered on our platform.</li>
                                        <li>"Products" refer to digital items, tools, templates, and other materials available for purchase.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-2" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>2. Use of Our Services and Products</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <h5>2.1 Eligibility</h5>
                                    <ul>
                                        <li>You must be at least 18 years old to use our services or make purchases.</li>
                                        <li>If you are using our services on behalf of a business or organization, you confirm that you have the authority to bind them to these terms.</li>
                                    </ul>
                                    <h5>2.2 Acceptable Use</h5>
                                    <ul>
                                        <li>You agree to use our website, services, and products lawfully and ethically.</li>
                                        <li>You shall not engage in activities that could harm our business, website, or other users.</li>
                                        <li>Unauthorized use, resale, distribution, or modification of our products and services without permission is strictly prohibited.</li>
                                    </ul>
                                    <h5>2.3 Service and Product Availability</h5>
                                    <ul>
                                        <li>We strive to keep our services and products updated, but we do not guarantee uninterrupted availability.</li>
                                        <li>We may modify, discontinue, or update our offerings at any time without prior notice.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-3" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>3. Payments and Refund Policy</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <h5>3.1 Pricing & Payments</h5>
                                    <ul>
                                        <li>Prices for services and products are listed on our website and may change without prior notice.</li>
                                        <li>All payments must be made before service initiation or product delivery, unless stated otherwise.</li>
                                        <li>We use secure third-party payment gateways and are not responsible for transaction failures due to external factors.</li>
                                    </ul>
                                    <h5>3.2 Refund Policy</h5>
                                    <ul>
                                        <li>For Services: Refunds are only issued for cancellations made before the project begins. Once work has started, refunds will be at our sole discretion.</li>
                                        <li>For Products: Due to the digital nature of our products, all sales are final unless the product is defective or not as described.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-4" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>4. Intellectual Property Rights</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>All content, designs, code, products, and services provided by Planet1 are our exclusive intellectual property.</li>
                                        <li>You may not copy, modify, distribute, or resell our content without explicit written permission.</li>
                                        <li>If you contribute any content to our platform (e.g., feedback, suggestions), you grant us the right to use, modify, and publish it.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-5" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>5. User Responsibilities</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>You are responsible for ensuring the accuracy of the information you provide while using our services.</li>
                                        <li>You must keep your account credentials confidential and notify us of any unauthorized access immediately.</li>
                                        <li>You shall not misuse our platform for illegal, fraudulent, or unethical activities.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-6" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>6. Limitation of Liability</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-6" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>We strive to deliver high-quality services and products, but we do not guarantee perfect results for every project.</li>
                                        <li>Planet1 will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or products.</li>
                                        <li>In any case, our total liability shall not exceed the amount paid for the specific service or product in question.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-7" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>7. Third-Party Links & External Services</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-7" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Our website may contain links to third-party websites or services for convenience.</li>
                                        <li>We do not own, control, or take responsibility for the content or practices of external websites.</li>
                                        <li>You are advised to review the terms and policies of third-party platforms before engaging with them.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-8" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>8. Modifications to Terms and Conditions</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-8" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>We reserve the right to update or modify these terms at any time.</li>
                                        <li>Changes will be effective immediately upon posting on our website.</li>
                                        <li>It is your responsibility to review these terms periodically.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-9" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>9. Contact Information</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-9" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>If you have any questions, concerns, or require assistance, feel free to contact us:</p>
                                    <h6><strong>📩 Email:</strong> <Link to="mailto:planet1.official@outlook.com"> planet1.official@outlook.com</Link></h6>
                                    <h6><strong>🌍 Website:</strong> <Link to={'https://planet1.in'}>Planet1</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default TandC;
