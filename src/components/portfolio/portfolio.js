/**
 * portfolio component
 *
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"

const Portfolio = () => {
    const image_path = "../../images/portfolio"

    return (
        <section id="portfolio">

            <div className="row narrow section-intro with-bottom-sep">
                <div className="col-twelve">
                    <h3 className="animate-this">Portfolio</h3>
                    <h1 className="animate-this">See My Latest Projects.</h1>

                    <p className="lead animate-this">Lorem ipsum Dolor adipisicing nostrud et aute
                        Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum
                        ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in
                        officia.</p>
                </div>
            </div>
            {/* <!-- end row section-intro --> */}

            <div className="row portfolio-content">
                <div className="col-twelve">
                    <div id="folio-wrap" className="bricks-wrapper">

                        <div className="brick folio-item">
                            <div
                                className="item-wrap animate-this"
                                data-src="images/portfolio/gallery/g-skaterboy.jpg"
                                data-sub-html="#01">
                                <a href="#" className="overlay">
                                    <StaticImage src={`${image_path}/skaterboy.jpg`} alt="Skaterboy"/>
                                    <div className="item-text">
                                        <span className="folio-types">
                                            Web Development
                                        </span>
                                        <h3 className="folio-title">Skaterboy</h3>
                                    </div>
                                </a>
                                <a href="https://www.behance.net/" className='details-link' title="details">
                                    <i className="icon-UpRightArrow"></i>
                                </a>
                            </div>
                            {/* <!-- end item-wrap --> */}

                            <div id="01" className='hide'>
                                <h4>Skater Boy</h4>
                                <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident
                                    tempor sunt quis nulla voluptate fugiat velit.
                                    <a href="www.behance.net">Details</a>
                                </p>
                            </div>
                        </div>
                        {/* <!-- end folio-item --> */}

                        <div className="brick folio-item">
                            <div
                                className="item-wrap animate-this"
                                data-src="images/portfolio/gallery/g-shutterbug.jpg"
                                data-sub-html="#02">
                                <a href="#" className="overlay">
                                    <StaticImage src={`${image_path}/shutterbug.jpg`} alt="Shutterbug"/>
                                    <div className="item-text">
                                        <span className="folio-types">
                                            Photography
                                        </span>
                                        <h3 className="folio-title">Shutterbug</h3>
                                    </div>
                                </a>
                                <a href="https://www.behance.net/" className='details-link' title="details">
                                    <i className="icon-UpRightArrow"></i>
                                </a>
                            </div>
                            {/* <!-- end item-wrap --> */}

                            <div id="02" className='hide'>
                                <h4>Shutterbug</h4>
                                <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident
                                    tempor sunt quis nulla voluptate fugiat velit.
                                    <a href="www.behance.net">Details</a>
                                </p>
                            </div>
                        </div>
                        {/* <!-- end folio-item --> */}

                        <div className="brick folio-item">
                            <div
                                className="item-wrap animate-this"
                                data-src="images/portfolio/gallery/g-explore.jpg"
                                data-sub-html="#03">
                                <a href="#" className="overlay">
                                    <StaticImage src={`${image_path}/explore.jpg`} alt="Explore"/>
                                    <div className="item-text">
                                        <span className="folio-types">
                                            UI/UX Design
                                        </span>
                                        <h3 className="folio-title">Explore</h3>
                                    </div>
                                </a>
                                <a href="https://www.behance.net/" className='details-link' title="details">
                                    <i className="icon-UpRightArrow"></i>
                                </a>
                            </div>
                            {/* <!-- end item-wrap -->	 */}

                            <div id="03" className='hide'>
                                <h4>Explore</h4>
                                <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident
                                    tempor sunt quis nulla voluptate fugiat velit.
                                    <a href="www.behance.net">Details</a>
                                </p>
                            </div>
                        </div>
                        {/* <!-- end folio-item --> */}

                        <div className="brick folio-item">
                            <div
                                className="item-wrap animate-this"
                                data-src="images/portfolio/gallery/g-minimalismo.jpg"
                                data-sub-html="#04">
                                <a href="#" className="overlay">
                                    <StaticImage src={`${image_path}/minimalismo.jpg`} alt="Minimalismo"/>
                                    <div className="item-text">
                                        <span className="folio-types">
                                            Web Design
                                        </span>
                                        <h3 className="folio-title">Minimalismo</h3>
                                    </div>
                                </a>
                                <a href="https://www.behance.net/" className='details-link' title="details">
                                    <i className="icon-UpRightArrow"></i>
                                </a>
                            </div>
                            {/* <!-- end item-wrap --> */}

                            <div id="04" className='hide'>
                                <h4>Minimalismo</h4>
                                <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident
                                    tempor sunt quis nulla voluptate fugiat velit.
                                    <a href="www.behance.net">Details</a>
                                </p>
                            </div>
                        </div>
                        {/* <!-- end folio-item --> */}

                        <div className="brick folio-item">
                            <div
                                className="item-wrap animate-this"
                                data-src="images/portfolio/gallery/g-bicycle.jpg"
                                data-sub-html="#05">
                                <a href="#" className="overlay">
                                    <StaticImage src={`${image_path}/bicycle.jpg`} alt="Bicycle"/>
                                    <div className="item-text">
                                        <span className="folio-types">
                                            Branding
                                        </span>
                                        <h3 className="folio-title">Bicycle</h3>
                                    </div>
                                </a>
                                <a href="https://www.behance.net/" className='details-link' title="details">
                                    <i className="icon-UpRightArrow"></i>
                                </a>
                            </div>
                            {/* <!-- end item-wrap --> */}

                            <div id="05" className='hide'>
                                <h4>Bicycle</h4>
                                <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident
                                    tempor sunt quis nulla voluptate fugiat velit.
                                    <a href="www.behance.net">Details</a>
                                </p>
                            </div>
                        </div>
                        {/* <!-- end folio-item --> */}

                        <div className="brick folio-item">
                            <div
                                className="item-wrap animate-this"
                                data-src="images/portfolio/gallery/g-salad.jpg"
                                data-sub-html="#06">
                                <a href="#" className="overlay">
                                    <StaticImage src={`${image_path}/salad.jpg`} alt="Salad"/>
                                    <div className="item-text">
                                        <span className="folio-types">
                                            Photography
                                        </span>
                                        <h3 className="folio-title">Salad</h3>
                                    </div>
                                </a>
                                <a href="https://www.behance.net/" className='details-link' title="details">
                                    <i className="icon-UpRightArrow"></i>
                                </a>
                            </div>
                            {/* <!-- end item-wrap --> */}

                            <div id="06" className='hide'>
                                <h4>Salad</h4>
                                <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident
                                    tempor sunt quis nulla voluptate fugiat velit.
                                    <a href="www.behance.net">Details</a>
                                </p>
                            </div>
                        </div>
                        {/* <!-- end folio-item -->   				 */}

                    </div>
                    {/* <!-- end folio-wrap --> */}
                </div>
                {/* <!-- end twelve --> */}
            </div>
            {/* <!-- end portfolio-content -->   	 */}

        </section>
        // <!-- end portfolio -->
    )
}

export default Portfolio