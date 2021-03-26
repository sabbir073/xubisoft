import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../components/ui/wrapper'
import ServiceBox from '../../../components/box-image/layout-six'
import {ServicesWrapper} from './services-area.style'

const Services = ({serviceBoxStyle, linkStyle, headingStyle}) => {
    const featuredDataQuery = useStaticQuery(graphql `
        query TrainingQueryData {
            allTrainingJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}, limit: 12) {
                edges {
                  node {
                    fields {
                        slug
                    }
                    id
                    title
                    excerpt
                    icon {
                      img{
                        childImageSharp{
                            fixed(width:150, height: 150, quality: 100 ){
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                      }
                    }
                  }
                }
            }
        }
    `);
    const services = featuredDataQuery.allTrainingJson.edges;
    return (
        <ServicesWrapper> 
            <Container>
                <Row>
                    {services && services.map(service => (
                        <Col lg={3} md={3} key={service.node.id} {...serviceBoxStyle}>
                            <ServiceBox
                                title={service.node.title}
                                imageSrc={service.node.icon.img.childImageSharp}
                                path={`/training/${service.node.fields.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </ServicesWrapper>
    )
}

Services.propTypes = {
    serviceBoxStyle: PropTypes.object,
    linkStyle: PropTypes.object,
    headingStyle: PropTypes.object,
}

Services.defaultProps = {
    serviceBoxStyle: {
        mb: "50px"
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    },
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: 'textColor',
        mt: '10px',
        textalign: 'center',
        responsive: {
            small: {
                mt: '5px'
            }
        }
    }
}

export default Services;