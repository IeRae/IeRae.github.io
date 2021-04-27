import * as React from "react"
import Helmet from "react-helmet"

import {withPrefix, useStaticQuery, graphql} from "gatsby"
import { ParallaxProvider } from 'react-scroll-parallax';
import {
    Header,
    Footer,
    Welcome,
    Vision,
    Summary,
    Business,
    Service,
    Infomation,
    About,
    Skill,
    Credentials,
    Portfolio,
    Stats,
    Contact
} from "../components/"

const IndexPage = (props) => {
    const data = useStaticQuery(
        graphql `
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
        vision_t
        business_t
        description
        infomation_t
        section_height
        service_t
        summary_t
      }
    }
  }
`
    )
    const title = data.site.siteMetadata
        ?.title || `Title`
    const section_title = {
        vision_t: data.site.siteMetadata
            ?.vision_t || `Vision title`,
        summary_t: data.site.siteMetadata
            ?.summary_t || `Summary title`,
        business_t: data.site.siteMetadata
            ?.business_t || `Business title`,
        service_t: data.site.siteMetadata
            ?.service_t || `Service title`,
        infomation_t: data.site.siteMetadata
            ?.infomation_t || `Infomation title`
    }

    const height = data.site.siteMetadata
        ?.section_height || `1000px`
    const author = data.site.siteMetadata
        ?.author || `author`

    return (
      // <body id="top" >
      // <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} >
      <ParallaxProvider>
        < Helmet > 
            {/* Java Script ================================================== */} 
            < script src={withPrefix('modernizr.js')} type = "text/javascript" /> 
            <script src={withPrefix('pace.min.js')} type="text/javascript"/>
            <script src={withPrefix('jquery-2.1.3.min.js')} type="text/javascript"/>
            <script src={withPrefix('plugins.js')} type="text/javascript"/>
            <script src={withPrefix('main.js')} type="text/javascript"/>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <title>AIS研究所</title>
        </Helmet>
    
        <Header siteTitle={title} menuTitle={section_title}/>
        <Welcome id="welcome" height={height}  menuTitle={section_title}/>

        <main className="content">
            <Vision />
            <Business/>
            <Stats/>
            <Contact/>
            <About/>
            <Skill/>
            <Credentials/>
            <Portfolio/>
            <Summary
                id="summary-section"
                sectionTitle={section_title.summary_t}
                height={height}/>
            <Service
                id="service-section"
                sectionTitle={section_title.service_t}
                height={height}/>
            <Infomation
                id="infomation-section"
                sectionTitle={section_title.infomation_t}
                height={height}/>
            <Footer author={author}/>
        </main>
        <div id="preloader">
            <div id="loader"></div>
        </div>
    </ParallaxProvider>
    // </body>
    )
}

export default IndexPage
