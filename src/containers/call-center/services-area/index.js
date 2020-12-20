import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import ServiceBox from '../../../components/box-large-image/layout-one'
import {SectionWrap, SectionBottom} from './services-area.style';

const ServicesArea = (props) => {
    const servicesDataQuery = useStaticQuery(graphql `
        query CallCentersQueryData {
            allCallCenterJson(sort: {order: DESC, fields: id}, limit: 6) {
                edges {
                    node {
                        title
                        id
                        excerpt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 370, maxHeight: 370, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationHeight
                                    presentationWidth
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const services = servicesDataQuery.allCallCenterJson.edges;
    const {serviceBoxStyles, linkStyle, headingStyle} = props;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {services.map(service => (
                        <Col lg={4} md={6} className="box-item" key={service.node.id}>
                            <ServiceBox
                                {...serviceBoxStyles}
                                title={service.node.title}
                                desc={service.node.excerpt}
                                imageSrc={service.node.image.childImageSharp}
                                path={`/call-center/`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    )
}

ServicesArea.propTypes = {
    serviceBoxStyles: PropTypes.object,
    headingStyle: PropTypes.object,
    linkStyle: PropTypes.object
}

ServicesArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        fontSize: '16px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333'
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default ServicesArea;