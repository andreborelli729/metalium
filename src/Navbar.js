import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data/dataHeader.js'
import metalium from './assets/imgs/horizontallogo.png';
import { Link } from 'react-router-dom';
import './css/navbar.css';


const Navbar = () => {
const [showLinks, setShowLinks] = useState(false);
const linksContainerRef = useRef(null);
const linksRef = useRef(null);

useEffect(() => {
  const linksHeight = linksRef.current.getBoundingClientRect().height;
  if (showLinks) {
    linksContainerRef.current.style.height = `${linksHeight}px`;
  } else {
    linksContainerRef.current.style.height = '0px';
  }
}, [showLinks]);

const toggleLinks = () => {
  setShowLinks(!showLinks);
};
  return (
    <>
    <nav>
      <div className='nav-center'>
      <div className='nav-header'>
        <Link to="/">
        <img src={metalium} className='olimpiadas' alt='logo olimpiadas'/>
        </Link>
        <button className='nav-toggle' onClick={toggleLinks}>
        <FaBars />

        </button>
      </div>
    
      <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
{links.map((link)=> {
const { id, url, text} = link;
return (
<li key={id}>
  <Link to={url}>{text}</Link>
</li>   
);
})}

</ul>
      </div>
      <ul className='social-icons'>

{social.map((media) => {
const {id, url, icon} = media;
return (
<li key={id}>
  <a href={url}>  {icon} </a>
</li>
);

})}
     </ul>

    

      </div>
    </nav>
    </>
  );
}

export default Navbar;