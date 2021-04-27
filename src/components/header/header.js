/**
 * header component
 *
 */

import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import {Container, Navbar, Nav} from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll';
import './style.css'
import {HeaderList} from "./headerlist";

const Header = ({siteTitle, menuTitle}) => {

  //   <header>

  //   <div className="header-logo">
  //       <a href="index.html">Howdy</a>
  //   </div>

  //   <a id="header-menu-trigger" href="#0">
  //       <span className="header-menu-text">Menu</span>
  //       <span className="header-menu-icon"></span>
  //   </a>

  //   <nav id="menu-nav-wrap">

  //       <a href="#0" className="close-button" title="close">
  //           <span>Close</span>
  //       </a>

  //       <h3>Howdy.</h3>

  //       <ul className="nav-list">
  //           <li className="current">
  //               <a className="smoothscroll" href="#home" title="">Home</a>
  //           </li>
  //           <li>
  //               <a className="smoothscroll" href="#about" title="">About</a>
  //           </li>
  //           <li>
  //               <a className="smoothscroll" href="#skills" title="">Skills</a>
  //           </li>
  //           <li>
  //               <a className="smoothscroll" href="#credentials" title="">Experience</a>
  //           </li>
  //           <li>
  //               <a className="smoothscroll" href="#portfolio" title="">Works</a>
  //           </li>
  //           <li>
  //               <a className="smoothscroll" href="#stats" title="">Stats</a>
  //           </li>
  //           <li>
  //               <a className="smoothscroll" href="#contact" title="">Contact</a>
  //           </li>
  //       </ul>

  //       <ul className="header-social-list">
  //           <li>
  //               <a href="#">
  //                   <i className="fa fa-facebook-square"></i>
  //               </a>
  //           </li>
  //           <li>
  //               <a href="#">
  //                   <i className="fa fa-twitter"></i>
  //               </a>
  //           </li>
  //           <li>
  //               <a href="#">
  //                   <i className="fa fa-behance"></i>
  //               </a>
  //           </li>
  //           <li>
  //               <a href="#">
  //                   <i className="fa fa-dribbble"></i>
  //               </a>
  //           </li>
  //           <li>
  //               <a href="#">
  //                   <i className="fa fa-instagram"></i>
  //               </a>
  //           </li>
  //       </ul>

  //   </nav>
  //   {/* <!-- end #menu-nav-wrap --> */}

  // </header>
  //  <!-- end header -->
    
  // <header className="bg-dark fixed-top header-logo">   
  //       <Container>
  //         <Navbar className="menu-nav-wrap" expand="md" variant="dark">
  //           <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
  //           <Navbar.Toggle aria-controls="navbarResponsive" />
  //           <Navbar.Collapse id="navbarResponsive">
  //             <Nav as="ul" className="ml-auto nav-list">
  //               <Nav.Item as="li">
  //                 <span onClick={() => scrollTo('#summary-section')} className="nav-link" activeClassName="active">
  //                   {menuTitle.summary_t}
  //                 </span>
  //                 <hr className="underline" />
  //               </Nav.Item>
  //               <Nav.Item as="li"> 
  //                 <span onClick={() => scrollTo('#business-section')} className="nav-link" activeClassName="active">
  //                   {menuTitle.business_t}
  //                 </span>
  //                 <hr className="underline" />
  //               </Nav.Item>
  //               <Nav.Item as="li">
  //                 <span onClick={() => scrollTo('#service-section')} className="nav-link" activeClassName="active">
  //                   {menuTitle.service_t}
  //                 </span>
  //                 <hr className="underline" />
  //               </Nav.Item>
  //               <Nav.Item as="li"> 
  //                 <span onClick={() => scrollTo('#infomation-section')} className="nav-link" activeClassName="active">
  //                   {menuTitle.infomation_t}
  //                 </span>
  //                 <hr className="underline" />
  //               </Nav.Item>
  //             </Nav>
  //           </Navbar.Collapse>
  //         </Navbar>
  //       </Container>
  //     </header>
  
  const [activeMenu, setActiveMenu] = React.useState(false);

  const handleOnClick = () => {
    setActiveMenu(!activeMenu); // remove the curly braces
  };

    return (

    <header className={`${activeMenu ? "menu-is-open" : ""}`}> 

   	<div className="header-logo">
       <a href="index.html">AIS研究所</a>
	  </div> 

      <div className={`${activeMenu ? "menu-button" : "menu-normal"}`}>
		<a id="header-menu-trigger" onClick={() => handleOnClick()}>
		 	<span className="header-menu-text">Menu</span>
		  <span className="header-menu-icon"></span>
		</a> 

		<nav id="menu-nav-wrap">

			<a className="close-button" onClick={() => handleOnClick()} title="close"><span>Close</span></a>	

      <div className="header-logo">
        <a href="/">AIS研究所</a>
        <h3>AIS研究所</h3>  
      </div> 

      
			<ul className="nav-list">
				<li className="item current">
          <span onClick={() => scrollTo('#vision')} className="header-menu-text">
            {menuTitle.vision_t}
          </span>
          <hr className="underline" />
        </li>
				<li className="item">
          <span onClick={() => scrollTo('#business')} className="header-menu-text">
            {menuTitle.business_t}
          </span>
          <hr className="underline" />
        </li>
				{/* <li className="item">
          <span onClick={() => scrollTo('#service-section')} className="header-menu-text">
            {menuTitle.service_t}
          </span>
          <hr className="underline" />
        </li> */}
				<li className="item">
          <span onClick={() => scrollTo('#contact')} className="header-menu-text">
            {menuTitle.infomation_t}
          </span>
          <hr className="underline" />
        </li>
			</ul>	


		</nav> 
     {/* <!-- end #menu-nav-wrap --> */}
     </div>

	</header>
  //  <!-- end header -->  

  // <header className={`${activeMenu ? "menu-is-open" : ""}`}>



  //   <nav id="menu-nav-wrap">


  //       {/*<a href="#0" className="close-button" title="close">
  //           <span>Close</span>
  //         </a> */}

  //   <div className="header-logo">
  //       <h3 href="index.html">AIS研究所</h3>
  //   </div>
    
  //       {/* <h3>Howdy.</h3> */}

  //       <div id="header-menu-trigger" href="#0">
  //         <div className="item">
  //           <span onClick={() => scrollTo('#summary-section')} className="header-menu-text">
  //             {menuTitle.summary_t}
  //           </span>
  //           <hr className="underline" />
  //         </div>

  //         <div className="item">
  //           <span onClick={() => scrollTo('#business-section')} className="header-menu-text">
  //             {menuTitle.business_t}
  //           </span>
  //           <hr className="underline" />
  //         </div>

  //         <div className="item">
  //           <span onClick={() => scrollTo('#service-section')} className="header-menu-text">
  //             {menuTitle.service_t}
  //           </span>
  //           <hr className="underline" />
  //         </div>

  //         <div className="item">
  //           <span onClick={() => scrollTo('#infomation-section')} className="header-menu-text">
  //             {menuTitle.infomation_t}
  //           </span>
  //           <hr className="underline" />
  //         </div>

  //         <span 
  //         onClick={() => handleOnClick()} // pass the index
  //         className={`header-menu-icon ${activeMenu ? "active" : "unactive"}`}
  //         >&nbsp;</span>
  //       </div>
        
  //   </nav>
  //   {/* <!-- end #menu-nav-wrap --> */}

  // </header>
  //  <!-- end header -->
    )
}

export default Header