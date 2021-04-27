/**
 * about component
 *
 */

import * as React from "react"
import './style.css'

const About = () => {

    return (
        <section id="about">

            <div className="about-profile-bg"></div>

            <div className="about-wrap">

                <div className="about-profile">

                    <div className="about-profile-bg"></div>

                    <div className="intro">
                        <h3 className="animate-this">About</h3>
                        <h1 className="animate-this">More About Me.</h1>

                        <p className="lead animate-this">Lorem ipsum Ut eiusmod ex magna sit dolor esse
                            adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit
                            culpa consectetur nostrud consectetur labore sed do.</p>
                    </div>

                    <p className="animate-this">
                        Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat
                        aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in
                        incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non
                        dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex
                        fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure
                        mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit
                        Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do
                        eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit
                        magna aliqua laborum veniam officia dolor.
                    </p>

                    <p className="animate-this">Lorem ipsum Minim nisi dolore proident Ut dolor quis
                        deserunt voluptate Ut voluptate enim ut adipisicing fugiat cupidatat nisi
                        adipisicing labore non adipisicing in sit proident. Ut in qui ea sint occaecat
                        in commodo in in in incididunt ut</p>

                    <p>
                        <a href="#" className="button full-width animate-this">Contact Me</a>
                        <a href="#" className="button button-primary full-width animate-this">Download CV</a>
                    </p>

                </div>
                {/* <!-- end about-profile  --> */}

                <div className="about-services">

                    <div className="intro">
                        <h3 className="animate-this">Services</h3>
                        <h1 className="animate-this">What I Do.</h1>

                        <p className="lead animate-this">Lorem ipsum Ut eiusmod ex magna sit dolor esse
                            adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna
                            velit. Ut dolor quis deserunt voluptate.</p>
                    </div>

                    <ul className="services">
                        <li className="item-branding animate-this">
                            <div className="icon-wrap">
                                <i className="icon-RegisteredTrademark"></i>
                            </div>
                            <div className="service-item">
                                <h4>Branding</h4>
                                <p>Lorem ipsum Sit Ut eu Ut commodo velit ea et ex officia dolor laborum do in
                                    quis ut in occaecat non Duis ut sint voluptate esse consequat aute incididunt in
                                    voluptate incididunt.
                                </p>
                            </div>
                        </li>
                        <li className="item-photography animate-this">
                            <div className="icon-wrap">
                                <i className="icon-Picture"></i>
                            </div>
                            <div className="service-item">
                                <h4>Photography</h4>
                                <p>Lorem ipsum Sit Ut eu Ut commodo velit ea et ex officia dolor laborum do in
                                    quis ut in occaecat non Duis ut sint voluptate esse consequat aute incididunt in
                                    voluptate incididunt.
                                </p>
                            </div>
                        </li>
                        <li className="item-webdesign animate-this">
                            <div className="icon-wrap">
                                <i className="icon-HTML"></i>
                            </div>
                            <div className="service-item">
                                <h4>Web Design</h4>
                                <p>Lorem ipsum Sit Ut eu Ut commodo velit ea et ex officia dolor laborum do in
                                    quis ut in occaecat non Duis ut sint voluptate esse consequat aute incididunt in
                                    voluptate incididunt.
                                </p>
                            </div>
                        </li>
                        <li className="item-uiux animate-this">
                            <div className="icon-wrap">
                                <i className="icon-Checked"></i>
                            </div>
                            <div className="service-item">
                                <h4>UI/UX Design</h4>
                                <p>Lorem ipsum Sit Ut eu Ut commodo velit ea et ex officia dolor laborum do in
                                    quis ut in occaecat non Duis ut sint voluptate esse consequat aute incididunt in
                                    voluptate incididunt.
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>
                {/* <!-- end about-services  -->   		 */}

            </div>
            {/* <!-- end about-wrap  --> */}

        </section>
        //  <!-- end about -->
    )
}

export default About
