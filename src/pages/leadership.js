import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/teamheader'
import TeamArea from '../containers/leadership/team-area'

const LeadershipPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Leadership"/>
        <Header/>
        <PageHeader 
            pageContext={pageContext} 
            location={location}
            title="OUR EXPERT TEAM"
        />
        <main className="site-wrapper-reveal">
            <TeamArea/>
        </main>
        <Footer/>
    </Layout>
  )
   
  export default LeadershipPage