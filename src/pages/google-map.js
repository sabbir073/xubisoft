import React from 'react'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import SectionTwo from '../containers/elements/google-map/section-two'

const GoogleMapPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Google Map" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Google Map"
            />
            <main className="site-wrapper-reveal">
                <SectionTwo />
            </main>
            <Footer />
        </Layout>
    )
}

export default GoogleMapPage
