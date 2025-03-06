// import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <>
    {/* <Helmet> */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    {/* </Helmet> */}
    </>
    
  );
};

Meta.defaultProps = {
  title: 'Welcome To Planet1',
  description: 'Empowering your digital journey',
  keywords: 'Web & Digital Solutions, Creative & Graphic Design, Digital Marketing & Content Creation, E-Form Filling & Documentation, College & Business Presentation Services, College & Project Work Assistance, Video, Audio & Photo Editing',
};

export default Meta;
