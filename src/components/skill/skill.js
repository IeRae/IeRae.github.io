/**
 * skill component
 *
 */

import * as React from "react"
import "./style.css"

const Skill = () => {

    return (
        <section id="skills">

            <div className="overlay"></div>
            <div className="gradient-overlay"></div>

            <div className="row wide">
                <div className="col-skills">

                    <div className="section-intro">
                        <h3 className="animate-this">Skillset</h3>
                        <h1 className="animate-this">I've Got Some Skills.</h1>

                        <p className="animate-this">Lorem ipsum Elit ut consequat veniam eu nulla nulla
                            reprehenderit reprehenderit sit velit in cupidatat ex aliquip ut cupidatat
                            Excepteur tempor id irure sed dolore sint sunt voluptate ullamco nulla qui Duis
                            qui culpa voluptate enim ea aute qui veniam in irure et nisi nostrud deserunt
                            est officia minim.</p>
                    </div>

                    <ul className="skill-bars">
                        <li className="animate-this" data-animate="fadeInRight">
                            <div className="progress percent90">
                                <span>90%</span>
                            </div>
                            <strong>HTML5</strong>
                        </li>
                        <li className="animate-this" data-animate="fadeInRight">
                            <div className="progress percent85">
                                <span>85%</span>
                            </div>
                            <strong>CSS3</strong>
                        </li>
                        <li className="animate-this" data-animate="fadeInRight">
                            <div className="progress percent70">
                                <span>70%</span>
                            </div>
                            <strong>JQuery</strong>
                        </li>
                        <li className="animate-this" data-animate="fadeInRight">
                            <div className="progress percent95">
                                <span>95%</span>
                            </div>
                            <strong>PHP</strong>
                        </li>
                        <li className="animate-this" data-animate="fadeInRight">
                            <div className="progress percent75">
                                <span>75%</span>
                            </div>
                            <strong>Wordpress</strong>
                        </li>
                        <li className="animate-this" data-animate="fadeInRight">
                            <div className="progress percent90">
                                <span>90%</span>
                            </div>
                            <strong>Angular JS</strong>
                        </li>
                    </ul>

                </div>
                {/* <!-- end col-six --> */}
            </div>
            {/* <!-- end row wide --> */}

        </section>
        //  <!-- end skills -->
    )
}

export default Skill
