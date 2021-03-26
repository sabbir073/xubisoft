import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/clipping-path/services-area'
import PricingBoxTwo from '../containers/elements/pricing-table/section-two'

const ITServicePage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="CLIPPING PATH" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="CLIPPING PATH"
    />
    <main className="site-wrapper-reveal">
        <ServicesArea/>
        <PricingBoxTwo />
    </main>
    <Footer/>
  </Layout>
)
 
export default ITServicePage
 