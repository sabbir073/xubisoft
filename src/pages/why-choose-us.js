import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/whychooseheader'
import SkillArea from '../containers/why-choose-us/our-skills'
import SolutionsArea from '../containers/about-us/why-choose-us'

const WhyChooseUsPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Why Choose Us" />
    <Header />
    <PageHeader
      pageContext={pageContext}
      location={location}
      title="Why Choose Us"
    />
    <main className="site-wrapper-reveal">
      <SkillArea />
      <SolutionsArea />
    </main>
    <Footer />
  </Layout>
)

export default WhyChooseUsPage
