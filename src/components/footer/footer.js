/**
 * footer component
 *
 */

import * as React from "react"
import "./style.css"

const Footer = () => {
    return (
        <footer>
            <div className="row">

                <div className="col-twelve tab-full social">
                    <ul className="footer-social">
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Behance</a>
                        </li>
                        <li>
                            <a href="#">Dribble</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                    </ul>
                </div>

                <div className="col-twelve tab-full">
                    <div className="copyright">
                        <span>© Copyright Howdy 2016.</span>
                    </div>
                </div>

            </div>
            {/* <!-- end row --> */}

            <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                    <i className="icon-UpArrow"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
