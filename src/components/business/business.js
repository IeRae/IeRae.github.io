/**
 * business component
 *
 */

import * as React from "react"
import "./style.css"

import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from 'react-scroll-parallax';

const Business = (props) => {
    const image_path = "../../images/portfolio"

    return (
        <section id="business">

        <div className="row narrow section-intro with-bottom-sep">
            <div className="col-twelve">
                <h3 className="animate-this">business</h3>
                <h1 className="animate-this">事業分野</h1>

                <p className="lead animate-this">
                解析分野（道路の老化予測、手話アシスタント）、　<br />
                アシスタント分野（老人ホームなど、高齢者をターゲットする）
                </p>
            </div>
        </div>
        {/* <!-- end row section-intro --> */}

        <div className="row business-content">
            <div className="col-twelve">
                <div id="folio-wrap" className="bricks-wrapper">

                    <div className="brick folio-item">
                        <div
                            className="item-wrap animate-this"
                            data-src="images/portfolio/gallery/g-skaterboy.jpg"
                            data-sub-html="#01">
                            <div className="overlay">
                                <Parallax className="item-parallax" y={[-20, 20]} tagOuter="figure">
                                    <StaticImage src={`${image_path}/skaterboy.jpg`} alt="Skaterboy"/>
                                </Parallax>
                                <div className="item-text">
                                    <span className="folio-types">
                                    解析分野
                                    </span>
                                    <h3 className="folio-title">AI研究所</h3>
                                    
                                    <p>
                                        道路の老化予測、手話アシスタント
                                    </p>
                        
                                </div>
                            </div>
                            {/* <a href="https://www.behance.net/" className='details-link' title="details">
                                <i className="icon-UpRightArrow"></i>
                            </a> */}
                        </div>
                        {/* <!-- end item-wrap --> */}
                    </div>
                    {/* <!-- end folio-item --> */}

                    <div className="brick folio-item">
                        <div
                            className="item-wrap animate-this"
                            data-src="images/portfolio/gallery/g-shutterbug.jpg"
                            data-sub-html="#02">
                            <div className="overlay">
                                <Parallax className="item-parallax" y={[-20, 20]} tagOuter="figure">
                                    <StaticImage src={`${image_path}/shutterbug.jpg`} alt="Shutterbug"/>
                                </Parallax>
                                <div className="item-text">
                                    <span className="folio-types">
                                        アシスタント分野
                                    </span>
                                    <h3 className="folio-title">ロボット研究所</h3>

                                    <p>
                                    老人ホームなど、高齢者をターゲットする
                                    </p>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end item-wrap --> */}
                    </div>
                    {/* <!-- end folio-item --> */}

                    
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

export default Business
