import { Container } from '../../components/container';
import arrowImg from '/public/images/icons/arrow.png';
import './style.css';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
            <div className="newsletter-section">
        <div className="newsletter-left">
          <h2 className="newsletter-title">
            Join Our <span className="highlight">Newsletter</span>
          </h2>
          <p className="newsletter-description">
            Be the first to know about our latest updates, exclusive offers,
            and more.
          </p>
        </div>
        <form className="subscription-form">
          <input type="email" className="email-input" placeholder="Enter your email" required />
          <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>Product & Service</h3>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Appliances</a></li>
            <li>
              <a href="#">Storage <span className="new-badge">New</span></a>
            </li>
            <li>
              <a href="#" className="external-icon">
                Lifestyle
                <img src={arrowImg} alt="icon" className="icon-img" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Shop Now</h3>
          <ul>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Promos</a></li>
            <li><a href="#">Online Shop FAQ</a></li>
            <li>
              <a href="#">Business Offer <span className="new-badge">New</span></a>
            </li>
            <li>
              <a href="#" className="external-icon">
                Student Offer
                <img src={arrowImg} alt="icon" className="icon-img" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact</a></li>
            <li>
              <a href="#" className="external-icon">
                Email Support
                <img src={arrowImg} alt="icon" className="icon-img" />
              </a>
            </li>
            <li>
              <a href="#" className="external-icon">
                Live Chat
                <img src={arrowImg} alt="icon" className="icon-img" />
              </a>
            </li>
            <li><a href="#">Phone Support</a></li>
            <li>
              <a href="#" className="external-icon">
                Community
                <img src={arrowImg} alt="icon" className="icon-img" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li><a href="#">My Products</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Wishlist</a></li>
            <li>
              <a href="#">Service <span className="new-badge">New</span></a>
            </li>
            <li>
              <a href="#" className="external-icon">
                Rewards
                <img src={arrowImg} alt="icon" className="icon-img" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company Info</a></li>
            <li><a href="#">Brand Guidelines</a></li>
            <li><a href="#">Careers</a></li>
            <li>
              <a href="#" className="external-icon">
                Investors
                <img src={arrowImg} alt="icon" className="icon-img" />
              </a>
            </li>

            <li>
              <a href="#" className="external-icon">
                About US
                <img src={arrowImg}alt="icon" className="icon-img" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="txt_footer">
          <div className="bottom-links">
            <a href="#">English</a>
            <a href="#">Privacy</a>
            <a href="#">Legal</a>
          </div>
          <div className="copyright">
            &copy; 2025 Israa Alghoul. All Rights Reserved.
          </div>
        </div>
      </div>
</Container>
    </footer>
  );
}