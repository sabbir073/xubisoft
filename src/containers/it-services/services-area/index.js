import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import FeatureBox from '../../../components/box-image/layout-two'
import {SectionWrap, SectionBottom} from './services-area.style'

const ServicesArea = (props) => {
    const featuredDataQuery = useStaticQuery(graphql `
        query ITServicesQueryData {
            allItServicesJson(sort: {order: ASC, fields: id}, limit: 9) {
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
                            fixed(width:100, height: 108, quality: 100 ){
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
    const featureData = featuredDataQuery.allItServicesJson.edges;
    const {linkStyle, headingStyle} = props;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle="Our Services"
                            title="FOR YOUR DIGITAL SUCCESS <br/> WE MIGHT BE <span>YOUR GREAT PARTNER</span>"
                        />
                    </Col>
                </Row>
                <Row>
                    {featureData.map((feature, i) =>  {
                        let customPath;
                        if(feature.node.id === "service-5"){
                            customPath = `/training`;
                        }
                        else if(feature.node.id === "service-4"){
                            customPath = `/call-center`;
                        }
                        else if(feature.node.id === "service-7"){
                            customPath = `/clipping-path`;
                        }
                        else{
                            customPath = `/service/${feature.node.fields.slug}`;
                        }
                        return (
                                <Col lg={4} md={6} className="box-item" key={feature.node.id}>
                                <FeatureBox
                                    title={feature.node.title}
                                    imageSrc={feature.node.icon.img.childImageSharp}
                                    desc={feature.node.excerpt}
                                    path={customPath}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </SectionWrap>
    )
}

ServicesArea.propTypes = {
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