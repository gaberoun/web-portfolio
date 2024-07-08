import Headroom from 'react-headroom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Contact from "../components/Contact/Contact";

const navigation = [
  {name: 'about me', href: '#about'},
  {name: 'my work', href: '#featured'},
  {name: 'contact me', href: '#contact'},
];

export default function Layout() {

  return (
    <>
      <div id='paper-overlay'></div>

      <Headroom>
        <nav>
          <AnchorLink href='#home' id="home-button">GA</AnchorLink>
          <ul>
            {navigation.map((link) => (
              <li key={link.name}>
                <AnchorLink href={link.href} className='nav-link'>{ link.name }</AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      </Headroom>

      <main>
        <Home />
        <About />
        <Featured />
      </main>

      <Contact />
    </>
  )
}
