import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="footer_content">
            <div className="content_left">
                <h2>FURNITURE</h2>
                <p> From beginners to advanced learners, find courses that fit your level and interests. Invest in your growth with our comprehensive e-learning platform.</p>
            </div>
            <div className="footer_content_center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer_content_right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: support@furniture.com</li>
                    <li>Address: 123 Business St, Suite 100, City, State</li>
                </ul>
            </div>
            <div className="footer_social-icons">
              <h2>CONNECT WITH US</h2>
                    <img src={facebook} alt="icons" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                </div>
        </div>
        <hr />
        <p className="footer_copyright">Copyright 2024 @Company. All right Reserved</p>
    </div>
    </div>
  )
}

export default Footer