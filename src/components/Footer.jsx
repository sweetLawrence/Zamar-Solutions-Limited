import React from 'react';
import './styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Zamar Solutions Ltd</h3>
          <p>Empowering Businesses with Digital Solutions.</p>
          <p>&copy; {new Date().getFullYear()} Zamar Solutions Ltd. All rights reserved.</p>
          <br />
          {/* <br /> */}
          <p>Call: 0720968693</p>
          <p>Call: 0745686343</p>
          <br />
          {/* <br /> */}
          <p>Email: info@zamarsolutions.co.ke</p>
        </div>

        <div className="footer-right">
          <iframe
            src="https://www.example.com"
            width="300"
            height="200"
            style={{ border: 'none' }}
            title="Zamar Solutions Map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
