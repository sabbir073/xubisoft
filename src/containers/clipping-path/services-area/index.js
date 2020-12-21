import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import ServiceBox from '../../../components/box-large-image/layout-four'
import {SectionWrap, SectionBottom} from './services-area.style';

const ServicesArea = (props) => {
    const servicesDataQuery = useStaticQuery(graphql `
        query ClippingPthQueryData {
            allClippingPathJson(sort: {order: DESC, fields: id}, limit: 6) {
                edges {
                    node {
                        title
                        id
                        excerpt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 260, maxHeight: 345, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationHeight
                                    presentationWidth
                                }
                            }
                        }
                        image2 {
                            childImageSharp {
                                fluid(maxWidth: 260, maxHeight: 345, quality: 100) {
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
    const services = servicesDataQuery.allClippingPathJson.edges;
    const {serviceBoxStyles, linkStyle, headingStyle} = props;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle="We Are Best"
                            title="<span>WHAT WE OFFER TO OUR CUSTOMERS.</span>"
                        />
                    </Col>
                </Row>
                <Row>
                    {services.map(service => (
                        <Col lg={3} md={3} className="box-item" key={service.node.id}>
                            <ServiceBox
                                {...serviceBoxStyles}
                                title={service.node.title}
                                desc={service.node.excerpt}
                                imageSrc={service.node.image.childImageSharp}
                                image2Src={service.node.image2.childImageSharp} 
                                path={`#`}
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
        fontSize: '18px',
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