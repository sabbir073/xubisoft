import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/historyheader'
import IntroArea from '../containers/our-history/intro-area'
import HistoryArea from '../containers/our-history/history-area'

const HistoryPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Our History" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Our History"
        />
        <main className="site-wrapper-reveal">
            <IntroArea />
            <HistoryArea />
        </main>
        <Footer />
    </Layout>
)

export default HistoryPage
