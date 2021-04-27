/**
 * welcome component
 *
 */

import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
// import {StaticImage} from "gatsby-plugin-image"
// import {useStaticQuery, graphql} from "gatsby"
// import Sketch from "react-p5";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Welcome = ({menuTitle}) => {

    // p5.js let x = 1450-10; let y = 700; const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref   (without that p5 will render
    // the canvas outside of your component) 	p5.createCanvas(p5.windowWidth - 50,
    // y).parent(canvasParentRef);   p5.background(0); }; const draw = (p5) => {
    // p5.circle(p5.mouseX + p5.random(-10, 10), p5.mouseY+ p5.random(-10, 10),
    // p5.random(10)) }; const mousePressed = (p5) => {   p5.background(0); }

    return (
        <section id="home">

            <div className="overlay"></div>
            <div className="gradient-overlay"></div>

            <div className="home-content-table">

                <div className="home-content-tablecell">
                    <div className="row">
                        <div className="col-twelve">
                            <div className="home-bottom-text">

                                <h1 className="animate-intro">
                                    <p>A company</p> 
                                    <h3>that creates a more convenient future with new technology</h3>
                                    {/* <br/> */}
                                    {/* <p>A company</p> */}
                                    <h3>that leads a convenient future to a fun future</h3>
                                    {/* <br/> */}
                                    {/* <p>A company</p> */}
                                    <h3>that is fun to work with</h3>
                                </h1>

                                <ul className="home-section-links">
                                    <li className="animate-intro">More
                                        <a onClick={() => scrollTo('#vision')} className="smoothscroll">About AIS lab</a>
                                    </li>
                                    <li className="animate-intro">business
                                        <a onClick={() => scrollTo('#business')} className="smoothscroll">{menuTitle.business_t}</a>
                                    </li>
                                    <li className="animate-intro">Contact
                                        <a onClick={() => scrollTo('#contact')} className="smoothscroll">{menuTitle.infomation_t}</a>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- end home-bottom-text --> */}
                        </div>
                        {/* <!-- end col-twelve -->  */}
                    </div>
                    {/* <!-- end row -->  */}
                </div>
                {/* <!-- end home-content-tablecell --> 		    */}
            </div>
            {/* <!-- end home-content-table --> */}

            <a href="#about" className="scroll-icon smoothscroll">
                <span className="icon-DownArrow"></span>
            </a>

        </section>
        // <!-- end home -->

    )
}

export default Welcome