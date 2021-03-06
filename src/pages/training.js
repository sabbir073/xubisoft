import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/training-header'
import ServicesArea from '../containers/training/services-area'

const trainingPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Training" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="TRAINING"
    />
    <main className="site-wrapper-reveal">
        <ServicesArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default trainingPage
 