export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <h3>Energy Minds Power Solutions</h3>
          <p>THINK.ACT.SAVE - Empowering Trade Through Technology</p>
          <span className="footer__tagline">Technology-Integrated Energy Trading Consultancy</span>
        </div>
        <div className="footer__links">
          <div className="footer__column">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Trading Solutions</a>
              </li>
              <li>
                <a href="#services">Risk Management</a>
              </li>
              <li>
                <a href="#markets">Trading Markets</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Leadership</a>
              </li>
              <li>
                <a href="#journey">Our Journey</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#testimonials">Success Stories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2025 Energy Minds Power Solutions Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
