import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionWrap from '../../../components/ui/accordion'
import SectionTitle from '../../../components/ui/section-title'
import Image from '../../../components/image'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import { SectionWrap, ImageBox } from './style'

const FaqSection = ({ accordionStyle }) => {
    const getFaqData = useStaticQuery(graphql`
        query GET_FAQ_SECTION_ONE_DATA {
            intro: faqJson(id: {eq: "section-one-itro"}) {
                title
            }
            faq: faqJson(id: {eq: "faq"}) {
                items {
                    id
                    question
                    answer
                }
            }
            video: faqJson(id: {eq: "faq-video"}) {
                image {
                    childImageSharp {
                        fluid(maxWidth: 570, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                video_link
            }
        }
    `)
    const { intro: { title }, faq: { items: faqs }, video: { image } } = getFaqData
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            mb="44px"
                            title={title}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <AccordionWrap {...accordionStyle}>
                            <Accordion allowZeroExpanded preExpanded={[0]}>
                                {
                                    faqs.map((el, index) => {
                                        return (
                                            <AccordionItem id={el.id} key={index}>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        {el.question}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>{el.answer}</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        )
                                    })
                                }
                            </Accordion>
                        </AccordionWrap>
                    </Col>
                    <Col lg={6}>
                    {image.childImageSharp.fluid && (
                            <ImageBox>
                                <Image fluid={image.childImageSharp.fluid} alt={title}/>
                            </ImageBox>
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

FaqSection.defaultProps = {
    accordionStyle: {
        responsive: {
            medium: {
                mb: '50px'
            }
        }
    }
}

export default FaqSection
