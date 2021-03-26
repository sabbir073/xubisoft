import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/faqheader'
import FaqSectionOne from '../containers/faq/section-one'

const FAQPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Faq" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Faq"
        />
        <main className="site-wrapper-reveal">
            <FaqSectionOne />
        </main>
        <Footer />
    </Layout>
)

export default FAQPage