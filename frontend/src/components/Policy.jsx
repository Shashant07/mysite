import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Policy = () => {

    return (
        <Container className="section faq" id='faq'>
            <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Privacy Policy</h1>
            <div className="card" style={{background:'transparent', border:'none'}}>
                <h6><strong>Last Updated: 6th March 2025</strong></h6>
                <p>At <strong>Planet1</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website, use our services, or purchase our products.</p>
                <p>By accessing our website or using our services, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our website.</p>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="faq-group-2">

                        <div className="accordion-item" style={{background:'transparent'}} >
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-1" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>1. Information We Collect</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We collect different types of information to improve our services and provide you with a better experience. This includes:</p>
                                    <h5>1.1 Personal Information</h5>
                                    <p>When you register, purchase a product, or use our services, we may collect personal details such as:</p>
                                    <ul>
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Billing address</li>
                                        <li>Payment details (processed securely through third-party payment providers)</li>
                                    </ul>
                                    <h5>1.2 Non-Personal Information</h5>
                                    <p>We may automatically collect certain information when you visit our website, such as:</p>
                                    <ul>
                                        <li>Browser type and version</li>
                                        <li>IP address</li>
                                        <li>Pages visited and time spent on the site</li>
                                        <li>Device information and operating system</li>
                                    </ul>
                                    <h5>1.3 Cookies and Tracking Technologies</h5>
                                    <p>We use cookies and similar tracking technologies to improve user experience, analyze website traffic, and personalize content. You can manage cookie settings through your browser preferences.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-2" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>2. How We Use Your Information</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We use the collected information to:</p>
                                    <ul>
                                        <li>Provide, operate, and improve our website, products, and services</li>
                                        <li>Process payments and fulfill orders</li>
                                        <li>Respond to customer inquiries and provide support</li>
                                        <li>Personalize user experience and recommendations</li>
                                        <li>Improve website security and prevent fraudulent activities</li>
                                        <li>Send updates, promotional offers, and service-related communications (you can opt out at any time)</li>
                                    </ul>
                                    <p>We do not sell or rent your personal information to third parties.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-3" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>3. Data Protection & Security</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We implement industry-standard security measures to protect your personal information, including:</p>
                                    <ul>
                                        <li>Secure data storage and encryption</li>
                                        <li>Limited access to sensitive data</li>
                                        <li>Secure payment processing through trusted third-party providers</li>
                                    </ul>
                                    <p>While we take strong precautions, no method of online transmission is 100% secure, and we cannot guarantee absolute security.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-4" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>4. Sharing of Information</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We only share information in the following cases:</p>
                                    <ul>
                                        <li>Service Providers: We may share necessary data with trusted partners (e.g., payment processors, hosting services) to help us operate our business.</li>
                                        <li>Legal Compliance: We may disclose your information if required by law or to protect our legal rights.</li>
                                        <li>Business Transfers: If Planet1 is merged or acquired, your information may be transferred to the new entity.</li>
                                    </ul>
                                    <p>We do not allow third-party advertising networks to collect your personal data on our site.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-5" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>5. Your Rights & Choices</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>You have the following rights regarding your data:</p>
                                    <ul>
                                        <li>Access & Update: You can review and update your personal information by logging into your account.</li>
                                        <li>Data Deletion: You can request the deletion of your personal data, subject to legal and business obligations.</li>
                                        <li>Opt-Out: You can unsubscribe from marketing emails by clicking the “Unsubscribe” link in any email.</li>
                                        <li>Cookie Preferences: You can manage or disable cookies through your browser settings.</li>
                                    </ul>
                                    <p>To exercise your rights, contact us at <Link to="mailto:planet1.official@outlook.com"> planet1.official@outlook.com</Link>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-6" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>6. Third-Party Links & External Websites</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-6" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>Our website may contain links to third-party websites. We are not responsible for their privacy policies or practices. We encourage you to review their policies before sharing any personal data.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-7" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>7. Children’s Privacy</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-7" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>Our services are not intended for individuals under 13 years old. We do not knowingly collect personal data from children. If we discover such information has been collected, we will delete it immediately.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-8" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>8. Changes to This Privacy Policy</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-8" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We may update this Privacy Policy periodically. Changes will be posted on this page with the last updated date. We encourage you to review this policy regularly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-9" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>9. Contact Us</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-9" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>If you have any questions about this Privacy Policy or your data, please reach out to us:</p>
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

export default Policy;
