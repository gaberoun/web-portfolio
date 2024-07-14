import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export default function Contact() {
  return (
    <footer id="contact">
      <h3 style={{fontSize: "1.1rem", marginTop: "0.5em", textAlign: "center"}}>Let's work together...</h3>

      <div id="footer-contacts">
        <div>
          <a href="mailto:pmaguilar@alum.up.edu.ph" style={{cursor: "pointer"}}>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>pmaguilar@alum.up.edu.ph</p>
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <p>09985305654</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
          <p>Quezon City, NCR</p>
        </div>
      </div>
    </footer>
  )
}
