import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/call-center/services-area'
import ContactArea from '../containers/global/contact-area/contact-three'

const callCenterPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Call Center" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="Call Center"
    />
    <main className="site-wrapper-reveal">
        <ServicesArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default callCenterPage
 