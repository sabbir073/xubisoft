import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/callcenterheader'
import ServicesArea from '../containers/call-center/services-area'
import CTAArea from '../containers/global/cta-area/section-two'

const callCenterPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Call Center" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="Call Center"
    />
    <main style={{'margin-bottom': '70px'}} className="site-wrapper-reveal">
        <ServicesArea/>
        <CTAArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default callCenterPage
 