import './Sidebar.css'
import profilePic from '../../assets/profile.jpg'
import { useState } from 'react';

export default function Sidebar() {
    const [activeLink, setActiveLink] = useState('');

    const navLinks = [
        { to: '#home', text: 'Home' },
        { to: '#about', text: 'About' },
        { to: '#blog', text: 'Blog' },
        { to: '#project', text: 'Project' },
        { to: '#contact', text: 'Contact' },
      ];


      const handleNavLinkClick = (link) => {
        setActiveLink(link);
      }

  return (
    <div className='sidebarContainer'>
        <div className='profilePicWrapper'>
                <img src={profilePic} alt="Profile Picture" />
        </div>

        <div className='linkWrapper'>
            <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                 <a
                    href={link.to}
                    className={activeLink === link.to ? 'activeLink' : ''}
                    onClick={() => handleNavLinkClick(link.to)}
            >
              {link.text}
            </a>
              </li>
          ))}
            </ul>
        </div>
    </div>
  )
}
