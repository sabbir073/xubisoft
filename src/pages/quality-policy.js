import React from "react"
import SEO from "../components/seo"
import {Container, Row, Col} from '../components/ui/wrapper'
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/privacyheader'
 
const PrivacyPolicy = ({pageContext, location}) => (
  <Layout location={location}>
    <SEO title="Privacy Policy"/>
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="Quality Policy"
    />
    <main className="site-wrapper-reveal">
      <Container>
        <center>
      <h3 style={{ marginTop: 50 }}>
      QUALITY POLICY OF <font style={{ color: '#1BABD9' }}>XUBISOFT LTD.</font>
      </h3>
      </center>
      <p style={{ marginTop: 20, fontSize: 20, textAlign: 'justify' }}>
      <b>Xubisoft Ltd.</b> is a leading IT Service Provider focused mainly on Software and Application development along with other IT consultancy services. <b>Xubisoft Ltd.</b> is engaged in designing, developing, and maintaining customized ERP software & apps, Training and Skill Development, Job placement activities, E-commerce and Call Center activities in the emerging IT sector in Bangladesh.
      </p>
      <p style={{ marginTop: 20, fontSize: 20, textAlign: 'justify' }}>
      Therefore, <b>Xubisoft Ltd.</b> recognizes the importance of the stakes as a part of a distinguished IT company. <b>Xubisoft</b> is committed to meeting and exceeding the requirements of its interested parties and complying with all the legal requirements applicable to the scope of its services.
      </p>
      <p style={{ marginTop: 20, marginBottom: 50, fontSize: 20, textAlign: 'justify' }}>
      The Quality Management System is a trusted instrument of <b>Xubisoft</b>, which is deployed to enhance customer satisfaction and continually improve the quality of services rendered to its valued customers for organizational growth and development.
      </p>
</Container>
    </main>
    <Footer/>
  </Layout>
)

export default PrivacyPolicy