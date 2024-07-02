import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const contacts = [
  {name: "Email", detail: "pmaguilar@alum.up.edu.ph", icon: {...faEnvelope}},
  {name: "Phone", detail: "+63 998 530 5654", icon: {...faPhone}},
  {name: "Location", detail: "Quezon City, NCR", icon: {...faLocationDot}}
];

const links = [
  {name: "LinkedIn", href: "https://www.linkedin.com/in/pm-aguilar/", icon: {...faLinkedin}},
  {name: "Github", href: "https://github.com/gaberoun", icon: {...faGithub}},
  {name: "Facebook", href: "https://www.facebook.com/patototaguilar/", icon: {...faFacebook}},
  {name: "Twitter", href: "https://x.com/gabonacc", icon: {...faXTwitter}}
];

export default function Contact() {
  return (
    <footer id="contact">
      <div id="footer-contacts">
        {contacts.map((contact) => (
          <div key={contact.name}>
            <FontAwesomeIcon icon={contact.icon} className="contact-icon" />
            <p>{contact.detail}</p>
          </div>
        ))}
      </div>
      <h3 style={{fontSize: "1.1rem", marginTop: "0.5em"}}>Let's work together...</h3>
    </footer>
  )
}
