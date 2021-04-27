/**
 * credentials component
 *
 */

import * as React from "react"
import "./style.css"

const Credentials = () => {
    return (
        <section id="credentials">

            <div className="row narrow section-intro with-bottom-sep">
                <div className="col-twelve">
                    <h3 className="animate-this">Career and Education</h3>
                    <h1 className="animate-this">More of My Credentials.</h1>

                    <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet
                        commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident
                        aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                </div>
            </div>
            {/* <!-- end section-intro --> */}

            <div className="row wide credentials-content">

                <div className="col-six tab-full left">

                    <h2 className="animate-this">Experience</h2>

                    <div className="timeline-wrap">

                        <div className="timeline-block animate-this">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <div className="timeline-header">
                                <p className="timeframe">July 2015 - Present</p>
                                <h3>Awesome Studio</h3>
                                <h4>UI Designer</h4>
                            </div>
                            <div className="timeline-content">
                                <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur
                                    nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut
                                    proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor
                                    incididunt amet est occaecat nisi.</p>
                            </div>
                        </div>
                        {/* <!-- end timeline-block --> */}

                        <div className="timeline-block animate-this">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <div className="timeline-header">
                                <p className="timeframe">July 2014 - June 2015</p>
                                <h3>Super Cool Agency</h3>
                                <h4>Front-end Developer</h4>
                            </div>
                            <div className="timeline-desc">
                                <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur
                                    nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut
                                    proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor
                                    incididunt amet est occaecat nisi incididunt.</p>
                            </div>
                        </div>
                        {/* <!-- end timeline-block --> */}

                        <div className="timeline-block animate-this">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <div className="timeline-header">
                                <p className="timeframe">May 2013 - June 2014</p>
                                <h3>Great Designs Studio</h3>
                                <h4>Web Designer</h4>
                            </div>
                            <div className="timeline-content">
                                <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur
                                    nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut
                                    proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor
                                    incididunt amet est occaecat nisi incididunt.</p>
                            </div>
                        </div>
                        {/* <!-- end timeline-block --> */}

                    </div>
                    {/* <!-- end timeline-wrap -->				 */}

                </div>
                {/* <!-- end col-six --> */}

                <div className="col-six tab-full right">

                    <h2 className="animate-this">Education</h2>

                    <div className="timeline-wrap">

                        <div className="timeline-block animate-this">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <div className="timeline-header">
                                <p className="timeframe">June 2012 - April 2013</p>
                                <h3>University of Life</h3>
                                <h4>Master Degree</h4>
                            </div>
                            <div className="timeline-content">
                                <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur
                                    nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut
                                    proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor
                                    incididunt amet est occaecat nisi.</p>
                            </div>
                        </div>
                        {/* <!-- end timeline-block --> */}

                        <div className="timeline-block animate-this">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <div className="timeline-header">
                                <p className="timeframe">June 2008 - March 2012</p>
                                <h3>State Design University</h3>
                                <h4>Bachelor Degree</h4>
                            </div>
                            <div className="timeline-desc">
                                <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur
                                    nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut
                                    proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor
                                    incididunt amet est occaecat nisi incididunt.</p>
                            </div>
                        </div>
                        {/* <!-- end timeline-block --> */}

                        <div className="timeline-block animate-this">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <div className="timeline-header">
                                <p className="timeframe">June 2006 - October 2008</p>
                                <h3>Design College</h3>
                                <h4>Bachelor Degree</h4>
                            </div>
                            <div className="timeline-content">
                                <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur
                                    nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut
                                    proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor
                                    incididunt amet est occaecat nisi incididunt.</p>
                            </div>

                        </div>
                        {/* <!-- end timeline-block --> */}

                    </div>
                    {/* <!-- end timeline-wrap -->	   		 */}

                </div>
                {/* <!-- end col-six --> 			 */}

            </div>
            {/* <!-- end row wide -->    	  	 */}

        </section>
        //  <!-- end credentials -->
    )
}

export default Credentials
