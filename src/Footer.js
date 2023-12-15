
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-section">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/contact">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Adresse: 123 Rue de la Rue, Ville</p>
          <p>Email:Fatima @gmail.com</p>
          {/* Ajoutez un formulaire de contact ici */}
        </div>

        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-media-icons">
            {/* Ajoutez des icônes de médias sociaux ici */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="chemin/vers/icon-facebook.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="chemin/vers/icon-twitter.png" alt="Twitter" />
            </a>
            {/* Ajoutez d'autres icônes de médias sociaux ici */}
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
