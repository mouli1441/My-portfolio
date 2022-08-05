import React from "react";
import { useState , useEffect } from "react";
import {Navbar , Container , Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import { SVGAttributes } from "react";
import { ReactSVG } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import CV from '../assets/img/CV.pdf';
import { Route } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

     return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/moulisree-karmakar-18622a206/"><img src={navIcon1} alt="" /></a>
              <a href="https://twitter.com/MoulisreeK"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/_moulii_"><img src={navIcon3} alt="" /></a>
            </div>
           
           <a href ={CV} download>
            <button  type="button" className="cv">
           Click to download CV
            </button>
            </a>
          
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}

