import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import { Container, Box, Row, Col } from '../../components/ui/wrapper'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import Image from '../../components/image'
import VideoButton from '../../components/ui/video-button'
import ModalVideo from '../../components/ui/modal-video'
import BoxIcon from '../../components/box-icon/layout-three'
import CTA from '../../containers/global/cta-area/section-one'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionWrap from '../../components/ui/accordion'
import { BannerArea, BannerTextWrap, IntroArea, FaqArea, VideoBoxWrap, VideoBtnWrap, FeatureArea } from './training-template.style'

const TrainingTemplate = ({ data, location, ...restProps }) => {
    const pageData = data.trainingJson;
    let bannerImg;
    if (pageData.banner_image) {
        bannerImg = pageData.banner_image.childImageSharp.fluid;
    }
    const {
        titleStyle,
        bottomStyle,
        taglineStyle,
        introTextStyles: { leftHeading, rightHeading, rightText },
        featureStyels: { featureTitle } } = restProps;

    const [videoOpen, setVideoOpen] = useState(false);

    if (pageData.video) {
        var { video_link } = pageData.video;
        var video_arr = video_link.split('=', -1);
        var video_id = video_arr[1];
    }
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }

    const modalVideoClose = () => {
        setVideoOpen(false)
    }
    return (
        <Layout location={location}>
            <SEO title={pageData.title} />
            <Header />
            <main className="site-wrapper-reveal">
                {(pageData.title || pageData.tagline) && (
                    <BannerArea fluid={bannerImg}>
                        <Container>
                            <Row justify="center">
                                <Col lg={8}>
                                    <BannerTextWrap>
                                        {pageData.title && <Heading {...titleStyle}>{pageData.title}</Heading>}
                                        {pageData.tagline && <Heading {...taglineStyle}>{pageData.tagline}</Heading>}
                                    </BannerTextWrap>
                                </Col>
                            </Row>
                        </Container>
                    </BannerArea>
                )}
                {pageData.introText && (
                    <IntroArea>
                        <Container>
                            <Row>
                                <Col lg={4}>
                                   <Heading {...leftHeading}>{pageData.introTitle}<span> {pageData.coloredTitle}</span></Heading>
                                </Col>
                                {pageData.introText && (
                                    <Col lg={{ span: 7, offset: 1 }}>
                                        <Box>
                                            {pageData.introText.heading && <Heading {...rightHeading} style={{'text-align': 'justify'}}>{parse(pageData.introText.heading)}</Heading>}
                                            {pageData.introText.text && <Text {...rightText}>{parse(pageData.introText.text)}</Text>}
                                        </Box>
                                    </Col>
                                )}
                            </Row>
                        </Container>
                    </IntroArea>
                )}
                
                {pageData.features && (
                    <FeatureArea>
                        <Container>
                            {pageData.features.title && (
                                <Row>
                                    <Col col="12">
                                        <Heading {...featureTitle}>{pageData.features.title}</Heading>
                                    </Col>
                                </Row>
                            )}
                            {pageData.features.items && (
                                <Row>
                                    {pageData.features.items.map(feature => (
                                        <Col lg={6} key={feature.id}>
                                            <BoxIcon
                                                title={feature.title}
                                                icon={feature.icon}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </Container>
                    </FeatureArea>
                )}
                {pageData.excerpt && (
                    <Row>
                        <Col col="12">
                            <Heading {...featureTitle}>More About The Course</Heading>
                            <Container><Heading {...bottomStyle}>{parse(pageData.excerpt)}</Heading></Container>
                        </Col>
                    </Row>
                )}
                <CTA />
            </main>
            <ModalVideo
                channel='youtube'
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        trainingJson(fields: {slug: {eq: $slug}}){
            title
            id
            excerpt
            banner_image{
                childImageSharp{
                  fluid(maxWidth: 1920, maxHeight: 570, quality: 100){
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
            }
            introTitle
            coloredTitle
            introText{
                heading
                text
            }
            video{
                preview_image{
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 570, maxHeight: 350) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                            aspectRatio
                        }
                    }
                }
                video_link
            }
            features {
                title
                items {
                    id
                    title
                    icon{
                        childImageSharp {
                            fixed(quality: 100, width: 60, height: 60) {
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                    }
                    desc
                }
            }
        }
    }
`;

TrainingTemplate.propTypes = {
    introTextStyles: PropTypes.object,
    titleStyle: PropTypes.object,
    taglineStyle: PropTypes.object,
    featureStyels: PropTypes.object
}

TrainingTemplate.defaultProps = {
    titleStyle: {
        as: 'h1',
        color: '#fff',
        mb: '15px'
    },
    bottomStyle: {
        as: 'h6',
        color: '#000',
        mb: '30px'
    },
    taglineStyle: {
        as: 'h5',
        fontweight: 400,
        color: '#fff'
    },
    introTextStyles: {
        leftHeading: {
            as: 'h3',
            mt: '25px',
            fontSize: '30px',
            child: {
                color: 'primary'
            },
            responsive: {
                large: {
                    fontSize: '30px'
                },
                medium: {
                    mt: 0,
                    mb: '20px',
                    fontSize: '24px'
                },
                small: {
                    fontSize: '22px'
                }
            }
        },
        rightHeading: {
            as: 'h5',
            position: 'relative',
            pl: '34px',
            lineheight: 1.67,
            fontweight: 800,
            fontSize: '20px',
            layout: 'quote',
            child: {
                color: 'primary'
            },
        },
        rightText: {
            mt: '15px',
            fontSize: '18px',
            ml: '34px',
            color: '#696969'
        }
    },
    featureStyels: {
        featureTitle: {
            as: 'h3',
            textalign: 'center',
            mb: '20px',
            color: 'primary'
        }
    }
}

export default TrainingTemplate;