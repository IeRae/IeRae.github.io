/**
 * stats component
 *
 */

import * as React from "react"
import "./style.css"

const Stats = () => {
    return (
    <section id="stats">

        <div className="row">
            <div className="col-twelve">
                <div className="block-1-4 block-tab-1-2 block-mob-full stats-list">

                    <div className="bgrid stat">
                        <div className="icon-part">
                            <i className="icon-Briefcase"></i>
                        </div>
                        <h5 className="stat-title">
                            Projects Completed
                        </h5>
                        <h3 className="stat-count">430</h3>
                    </div>
                    {/* <!-- end stat --> */}

                    <div className="bgrid stat">
                        <div className="icon-part">
                            <i className="icon-AddressBook"></i>
                        </div>
                        <h5 className="stat-title">
                            Happy Clients
                        </h5>
                        <h3 className="stat-count">390</h3>
                    </div>
                    {/* <!-- end stat --> */}

                    <div className="bgrid stat">
                        <div className="icon-part">
                            <i className="icon-Diploma1"></i>
                        </div>
                        <h5 className="stat-title">
                            Awards Received
                        </h5>
                        <h3 className="stat-count">100</h3>
                    </div>
                    {/* <!-- end stat -->									 */}

                    <div className="bgrid stat">
                        <div className="icon-part">
                            <i className="icon-Idea"></i>
                        </div>
                        <h5 className="stat-title">
                            Crazy Ideas
                        </h5>
                        <h3 className="stat-count">120</h3>
                    </div>
                    {/* <!-- end stat --> */}

                </div>
                {/* <!-- end stats-list --> */}
            </div>
            {/* <!-- end col-twelve --> */}
        </div>
        {/* <!-- end row --> */}

    </section>
    // <!-- end stats -->
    )
 }
 
 export default Stats