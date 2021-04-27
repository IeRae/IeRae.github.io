/**
 * summary component
 *
 */

 import * as React from "react"
 import './style.css'
//  import 'bootstrap/dist/css/bootstrap.min.css';
 
 const Summary = (props) => {
 
 
   return (
       <div
          className="d-flex text-center text-black"
         id = {props.id}
         style={{
           margin: `0 auto`,
           maxWidth: `100%`,
           padding: `4rem 1.0875rem 1.45rem`,
           height: props.height,
         }}
       >
         {/* {props.sectionTitle} page */}
         <div className="summary u-mb100">
                <div className="summary_position">
                    <h3 className="heading-1 summary_heading">Interview</h3>

                    <a className="summary_inner" href="https://www.ais-info.co.jp/company/greeting.html">
                        
                        <h4 className="summary_title">
                        信頼されるAIS！社会の発展に貢献します。<br/><br/>

                          株式会社亜細亜情報システム（AIS）は、2004年設立以来ユビキタスのニーズにあった情報システム構築を目指す企業として事業を進めて参りました。<br/>
                          そして従来の事業に加え、今後は低酸素社会の実現に向けた再生可能エネルギーとそれに関連するエネルギーマネージメントシステム分野、韓国との技術提携による付加価値の高いソリューション事業に挑戦して参ります。<br/>
                          皆様と共に更なる成長に向け歩めるよう従業員一同努力して参る所存です。<br/>
                          今後ともご支援ご指導のほどよろしくお願いいたします。
                        </h4>

                                              

                        <p>田中 耕一郎                                     / AIS研究所</p>
                        <span className="c-icon">
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                        </span>
                    </a>
                    
                    <a href="https://www.ais-info.co.jp/index.html" className="c-btn u-mb100">MORE
                      <span className="c-icon">
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                       </svg>
                      </span>
                    </a>

                </div>
                <div className="interview_img">
                    <img src="https://www.ais-info.co.jp/images/ceo-003.png" alt=""/>
                </div>
            </div>
       </div>
   )
 }
 
 export default Summary
 