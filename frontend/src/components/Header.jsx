import React, { useState } from "react";
import '../assets/styles/headerSidebar.css';
import StartModal from "./StartModal";
import { FaSignOutAlt, FaSignInAlt, FaQuestionCircle, FaShoppingCart, FaRegWindowClose, FaShoppingBasket, FaShippingFast, FaHome, FaRProject, FaProjectDiagram, FaServicestack } from 'react-icons/fa';
import { FaRecycle, FaUser, FaBars, FaUserLarge, FaUsers, FaPeopleGroup, FaRegPenToSquare, FaRegAddressCard, FaQuestion, FaBookOpen, FaMessage} from 'react-icons/fa6';
import { MdSecurity, MdDashboardCustomize, MdOutlineArrowDropDownCircle, MdPolicy  } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { IoMdCube } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [isSidebar, setIsSidebar] = useState(false);
  const [isUserProfile, setIsUserProfile] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {

      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
      setIsUserProfile(false);
    } catch (err) {
      console.error(err);
    }

  };
  return (
    <>
    <StartModal show={showModal} handleClose={() => setShowModal(false)} />
    <nav className={`main-content ${isSidebarOpen ? "expanded" : ""} navbar navbar-dark bg-dark fixed-top py-2`} style={{zIndex: '11'}}>
          <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="toggle-sidebar-btn">
          {isSidebarOpen ? (<FaRegWindowClose/>) : (<FaBars/>)}
          </span><Link to='/' className="navbarTitle">Planet1</Link>
          <div style={{display: 'flex'}}>
            <SearchBox />
            <button className="btn btn-primary btn-sm btnGetStarted" onClick={() => setShowModal(true)} type="submit">Get Started</button>
          </div>
    </nav>
      
      {/* Sidebar */}
      <div className={`sidebar bg-dark text-white ${isSidebarOpen ? "open" : ""}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaHome className="mb-1"/>
              <span className='px-2'>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/about" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaPeopleGroup className="mb-1"/>
              <span className='px-2'>About Us</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/services" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaServicestack className="mb-1"/>
              <span className='px-2'>Services</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/products" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <IoMdCube className="mb-1"/>
              <span className='px-2'>Products</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/portfolio" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaProjectDiagram className="mb-1"/>
              <span className='px-2'>Portfolio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/blogs" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaBookOpen className="mb-1"/>
              <span className='px-2'>Blogs</span>
            </Link>
          </li>
          <hr />

          {userInfo && userInfo.isAdmin && (
          <>
            <li className="nav-item" style={{listStyle: 'none'}}>
            <Link className="nav-link text-white collapsed" data-bs-target="#admin-nav" data-bs-toggle="collapse" to="#">
              <MdDashboardCustomize className="mb-1"/>
              <span className='px-2'>Admin Routes</span><MdOutlineArrowDropDownCircle className="ms-auto" />
            </Link>
            <ul id="admin-nav" className="collapse " data-bs-parent="#sidebar-nav">
              <li className="nav-item" style={{listStyle: 'none'}}>
                <Link to="/admin/productlist" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="nav-link text-white">
                  <FaShoppingBasket className="mb-1"/>
                  <span className='px-2'>Products</span>
                </Link>
              </li>
              <li className="nav-item" style={{listStyle: 'none'}}>
                <Link to="/admin/servicelist" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="nav-link text-white">
                  <FaShoppingBasket className="mb-1"/>
                  <span className='px-2'>Services</span>
                </Link>
              </li>
              <li className="nav-item" style={{listStyle: 'none'}}>
                <Link to="/admin/orderlist" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="nav-link text-white">
                  <FaShippingFast className="mb-1"/>
                  <span className='px-2'>Orders</span>
                </Link>
              </li>
              <li className="nav-item" style={{listStyle: 'none'}}>
                <Link to="/admin/userlist" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="nav-link text-white">
                <FaUsers className="mb-1"/>
                <span className='px-2'>Users</span>
                </Link>
              </li>
              <li className="nav-item" style={{listStyle: 'none'}}>
                <Link to="/admin/messagelist" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="nav-link text-white">
                  <FaMessage className="mb-1"/>
                  <span className='px-2'>Messages</span>
                </Link>
              </li>
              
            </ul>
          </li>
          <hr />
          </>
          )}

          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/messages" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaRegAddressCard className="mb-1"/>
              <span className='px-2'>Contact Us</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white sidebarLinks" to="/faq" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaQuestion className="mb-1"/>
              <span className='px-2'>FAQ</span>
            </Link>
          </li>

          {userInfo ? (
            <>
              <li className="nav-item">
                <Link className="nav-link text-white sidebarLinks" to="#" onClick={logoutHandler}>
                <FaSignOutAlt className="mb-1"/>
                <span className='px-2'>Sign Out</span>
                </Link>
              </li>
            </>
          ):(
            <li className="nav-item">
              <Link className="nav-link text-white sidebarLinks" to="/login" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaSignInAlt className="mb-1" />
              <span className='px-2'>Login</span>
              </Link>
            </li>
          )}

          <hr />
          <li className="nav-item">
            <Link className="nav-link text-white collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
              <MdDashboardCustomize /><span className='px-2'>More</span><MdOutlineArrowDropDownCircle className="ms-auto" />
            </Link>
            <ul id="tables-nav" className="collapse " data-bs-parent="#sidebar-nav">
              <li className="nav-item" style={{listStyle: 'none'}}>
                <Link to="/policy" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="nav-link text-white">
                <MdPolicy /> <span className="px-1">Privacy Policy</span>
                </Link>
              </li>
              <li className="nav-item" style={{listStyle: 'none'}}>
                <Link to="/tandc" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="nav-link text-white">
                  <GrDocumentText /><span className="px-1">Terms & Conditions</span>
                </Link>
              </li>
              
            </ul>
          </li>

          
        </ul>
      </div>

      
      
      </>
  );
};

export default Header;
