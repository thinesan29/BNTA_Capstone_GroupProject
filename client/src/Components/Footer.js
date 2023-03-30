import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { BsCreditCard, BsPaypal } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <p>Contact Us: 0800-456-7890</p>
            </div>
            <div className="socials">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <div className="payment">
                <p>We accept <BsCreditCard /> Visa, <BsCreditCard /> Mastercard, <BsPaypal /> Paypal.</p>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Blockbuster Reborn. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;