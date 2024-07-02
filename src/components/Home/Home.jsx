import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareXTwitter, faSquareFacebook, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const contacts = [
  {name: "Email", detail: "pmaguilar@alum.up.edu.ph"},
  {name: "Phone", detail: "+63 998 530 5654"},
  {name: "Location", detail: "Quezon City, NCR"}
];

const links = [
  {name: "LinkedIn", href: "https://www.linkedin.com/in/pm-aguilar/", icon: {...faLinkedin}},
  {name: "Github", href: "https://www.linkedin.com/in/pm-aguilar/", icon: {...faSquareGithub}},
  {name: "Email", href: "mailto:pmaguilar@alum.up.edu.ph", icon: {...faEnvelope}}
];

export default function Home() {

  return (
    <section id="home">
      <div id="title">
        <h1 className="text-primary">Hi! I am Gabe.</h1>
        <h2>Full-stack web developer</h2>
      </div>
      <div id="home-contacts">
        {contacts.map((contact) => (
          <div key={contact.name} className="home-contact text-secondary">
            <p><strong>{contact.name}</strong></p>
            <p>{contact.detail}</p>
          </div>
        ))}
      </div>
      <div id="home-links">
        {links.map((link) => (
          <a href={link.href} key={link.name} className="home-link">
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </section>
  )
}
