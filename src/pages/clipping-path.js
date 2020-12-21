import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/clipping-path/services-area'
import ContactArea from '../containers/global/contact-area/contact-three'

const ITServicePage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Clipping Path" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="Clipping path"
    />
    <main className="site-wrapper-reveal">
        <ServicesArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default ITServicePage
 