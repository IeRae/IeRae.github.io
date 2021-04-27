/**
 * contact component
 *
 */

import * as React from "react"
import "./style.css"

const Contact = () => {
    return (
        <section id="contact">

            <div className="overlay"></div>

            <div className="row narrow section-intro">
                <div className="col-twelve">
                    <h3 className="animate-this">Contact</h3>
                    <h1 className="animate-this">お問合せ</h1>

                    <p className="lead animate-this">
                        亜細亜情報システムについてご質問等ございましたら、 お気軽にお問い合わせください。 お問い合わせは担当者が確認してから、原則24時間以内に対応いたします。
                        内容によっては遅れる場合がありますので、予めご了承ください お問い合わせの前に「個人情報の取扱いについて」をご確認ください。
                    </p>
                </div>
            </div>
            {/* <!-- end section-intro --> */}

            <div className="row contact-form">
                <div className="col-twelve">

                    {/* <!-- form --> */}
                    <form name="contactForm" id="contactForm" method="post">

                        <div className="form-field animate-this">
                            <input
                                name="contactName"
                                type="text"
                                id="contactName"
                                placeholder="Name"
                                value=""
                                minLength="2"
                                required=""/>
                        </div>
                        <div className="form-field animate-this">
                            <input
                                name="contactEmail"
                                type="email"
                                id="contactEmail"
                                placeholder="Email"
                                value=""
                                required=""/>
                        </div>
                        <div className="form-field animate-this">
                            <input
                                name="contactSubject"
                                type="text"
                                id="contactSubject"
                                placeholder="Subject"
                                value=""/>
                        </div>
                        <div className="form-field animate-this">
                            <textarea
                                name="contactMessage"
                                id="contactMessage"
                                placeholder="message"
                                rows="10"
                                cols="50"
                                required=""></textarea>
                        </div>

                        <div className="form-field animate-this">
                            <button className="submitform">Submit</button>

                            <div id="submit-loader">
                                <div className="text-loader">Sending...</div>
                                <div className="s-loader">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            </div>
                        </div>

                    </form>
                    {/* <!-- Form End --> */}

                    {/* <!-- contact-warning --> */}
                    <div id="message-warning"></div>

                    {/* <!-- contact-success --> */}
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
                    </div>

                </div>
                {/* <!-- end col-twelve -->   		 */}
            </div>
            {/* <!-- end row contact-form --> */}

            <div className="row contact-info">

                <div className="col-four tab-full">
                    <h5 className="animate-this">Address</h5>

                    <p className="animate-this">
                        〒141-0031<br />
                        東京都品川区西五反田7丁目1番9号<br />
                        五反田HSビル7階　
                    </p>
                </div>
                {/* <!-- end col-four --> */}

                <div className="col-four tab-full collapse">
                    <h5 className="animate-this">Email</h5>

                    <p className="animate-this">
                        yoonir@ais-info.co.jp
                    </p>
                </div>
                {/* <!-- end col-four --> */}

                <div className="col-four tab-full">
                    <h5 className="animate-this">Call</h5>

                    <p className="animate-this">
                        TEL : 03-5434-7760<br/>
                        FAX : 03-5434-7763
                    </p>
                </div>
                {/* <!-- end col-four --> */}

            </div>
            {/* <!-- end row contact-info --> */}

        </section>
        // <!-- end contact -->
    )
}

export default Contact