/**
 * vision component
 *
 */

import React, {useEffect} from "react"
import './style.css'
import { StaticImage } from "gatsby-plugin-image"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Vision = (props) => {
    const image_path = "../../images/vision"

      useEffect(() => {
        // Update the document title using the browser API
        AOS.init()
      });

    return (
        <section id="vision">
            <div className="row narrow section-intro with-bottom-sep">
                <div className="col-twelve">
                    <h3 className="animate-this">WONDERFUL VISION</h3>
                    <h1 className="animate-this">AIS研究所のVision</h1>

                    <p className="lead">
                        新しい技術でより便利な未来を創る会社 <br/>
                        便利な未来を楽しい未来へ導く会社！ <br/>
                        共にする人が楽しい会社！
                    </p>
                </div>
            </div>

            <div className="row wide vision-content">
            <div
                        className="left aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="1200">

                        {/* <div className="card card-main" style="background : none;"> */}
                        <div className="card" >
                            {/* <img
                                src="../../images/vision-future.png"
                                className="card-img-top"
                                alt="..."
                                // style="max-width : 95%; margin: 0 auto;"
                                /> */}
                                <StaticImage className="vision-icon" src={`${image_path}/vision-tec.jpg`} alt="vision-tec"/>
                            {/* <h6 style="text-align:center; color:#1f4e79; margin-top:10px;"> */}
                            <h3>
                            便利な未来
                            </h3>

                        </div>
                    </div>

                    <div
                        className="middle aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="1200"
                        data-aos-delay="200">
                        {/* <div className="card card-main" style="background : none;"> */}
                        <div className="card" >
                            {/* <img
                                src="/default/img/web/icon_main_hardware.png"
                                className="card-img-top"
                                alt="..."
                                // style="max-width : 95%; margin: 0 auto;"
                                /> */}
                                <StaticImage className="vision-icon" src={`${image_path}/vision-future.png`} alt="vision-future"/>

                            {/* <h6 style="text-align:center; color:#1f4e79; margin-top:10px;"> */}
                            <h3>
                            楽しい未来
                            </h3>

                        </div>
                    </div>

                    <div
                        className="right aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="1200"
                        data-aos-delay="400">
                        {/* <div className="card card-main" style="background : none;"> */}
                        <div className="card">
                            {/* <img
                                src="/default/img/web/icon_main_global.webp"
                                className="card-img-top"
                                alt="..."
                                // style="max-width : 95%; margin: 0 auto;"
                                /> */}
                                <StaticImage className="vision-icon" src={`${image_path}/vision-human.jpeg`} alt="vision-human"/>
                            {/* <h6 style="text-align:center; color:#1f4e79; margin-top:10px;"> */}
                            <h3>
                            人が楽しい
                            </h3>
                        </div>
                    </div>

            </div>
        </section>
    )
}

export default Vision
