import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { MdPlace, MdMailOutline, MdPhone } from "react-icons/md";
import parse from 'html-react-parser'
import { Container } from 'react-bootstrap'
import Logo from '../../../../assets/images/logo/newslogo.jpg'
import ISO from '../../../../assets/images/logo/ISO.jpg'
import gplayImage from '../../../../assets//images/icons/basislogo.png'
import appImage from '../../../../assets//images/icons/baccologo.png'
import { Row, Col } from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import Heading from '../../../../components/ui/heading'
import Social, { SocialLink } from '../../../../components/ui/social'
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    TextWidget,
    FooterWidgetList,
    FooterBottom
} from './footer.style'

const Footer = ({ copyrightStyle, ...props }) => {
    const siteInfo = useStaticQuery(graphql`
        query FooterSiteQuery {
            site {
                siteMetadata {
                    copyright
                    contact {
                        phone
                        email
                        address
                        website
                    }
                    social {
                        facebook
                        twitter
                        instagram
                        linkedin
                    }
                }
            }
        }      
    `)
    const { phone, email, address, website } = siteInfo.site.siteMetadata.contact;
    const { copyright } = siteInfo.site.siteMetadata;
    const { facebook, twitter, instagram, linkedin } = siteInfo.site.siteMetadata.social;
    return (
        <FooterWrap {...props}>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }}>
                                <LogoWidget>
                                    <img style={{"margin-left": "5px"}} src={Logo} alt="Logo" />
                                </LogoWidget>
                                <TextWidget>
                                    {address && <Text mb="10px"><Anchor style={{color:'#ABABAB', 'cursor': 'text'}} path={'https://www.google.com/maps/place/Xubisoft+Ltd./@23.8586572,90.3984257,15z/data=!4m5!3m4!1s0x0:0xd02f082dce6d913!8m2!3d23.8593506!4d90.4027256'}><MdPlace className="icon" style={{ color: '#13CCFD', 'margin-right': '5px' }}/>{address}</Anchor></Text>}
                                    {email && <Text mb="10px"><Anchor style={{color:'#ABABAB'}} path={`mailto:${email}`} hoverstyle="2"><MdMailOutline className="icon" style={{ color: '#13CCFD', 'margin-right': '5px' }}/>{email}</Anchor></Text>}
                                    {phone && <Text mb="10px"><Anchor style={{color:'#ABABAB'}} path={`tel:${phone}`} hoverstyle="2"><MdPhone className="icon" style={{ color: '#13CCFD', 'margin-right': '5px' }}/>{phone}</Anchor></Text>}
                                    
                                </TextWidget>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }}>
                                <Heading as="h6" mt="-3px" mb="20px" style={{color:'#13CCFD'}}>SERVICES</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/service/software-development" color="#ABABAB" hoverstyle="2">Software Development</Anchor></li>
                                    <li><Anchor path="/service/mobile-applications" color="#ABABAB" hoverstyle="2">App Development</Anchor></li>
                                    <li><Anchor path="/service/website-development" color="#ABABAB" hoverstyle="2">Web Development</Anchor></li>
                                    <li><Anchor path="/service/call-center-services" color="#ABABAB" hoverstyle="2">Call Center Services</Anchor></li>
                                    <li><Anchor path="/clipping-path" color="#ABABAB" hoverstyle="2">Clipping Path Services</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '27px' } }}>
                                <Heading as="h6" mt="-3px" mb="20px" style={{color:'#13CCFD'}}>QUICK LINKS</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/about-us" color="#ABABAB" hoverstyle="2">About Us</Anchor></li>
                                    <li><Anchor path="/products" color="#ABABAB" hoverstyle="2">Our Products</Anchor></li>
                                    <li><Anchor path="/service/it-consultancy" color="#ABABAB" hoverstyle="2">IT Consultancy</Anchor></li>
                                    <li><Anchor path="/training" color="#ABABAB" hoverstyle="2">Trainings</Anchor></li>
                                    <li><Anchor path="/careers" color="#ABABAB" hoverstyle="2">Career</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget>
                                <Heading as="h6" mt="-3px" mb="20px" style={{color:'#13CCFD'}}>CERTIFICATION</Heading>
                                <img src={ISO} alt="Logo" />
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget>
                            <Heading as="h6" mt="-3px" mb="20px" style={{color:'#13CCFD'}}>MEMBER OF</Heading>
                                <FooterWidgetList>
                                    <li>
                                        <Button path="https://basis.org.bd/company-profile/A678" to="https://basis.org.bd/company-profile/A678" imgbutton="true" shadow="true"><img src={gplayImage} alt="BASIS" /></Button>
                                    </li>
                                    <li>
                                        <Button path="https://www.bacco.org.bd/member-list/?sorter=X" to="https://www.bacco.org.bd/member-list/?sorter=X" imgbutton="true" shadow="true"><img src={appImage} alt="BACCO" /></Button>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom style={{ borderTop:'0.1px solid #ABABAB', paddingTop:'20px'}}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-left">
                            {copyright && <Text {...copyrightStyle}>&copy; {new Date().getFullYear()} {parse(copyright)}</Text>}
                        </Col>
                        <Col md={6} className="text-center text-md-right">
                            <Social space="8px" tooltip={true} shape="rounded" varient="flat">
                                {facebook && (
                                    <SocialLink
                                        path={facebook}
                                        title="Facebook">
                                        <TiSocialFacebook style={{ color:'#0854F7' }}/>
                                    </SocialLink>
                                )}
                                {linkedin && (
                                    <SocialLink
                                        path={linkedin}
                                        title="Linkedin">
                                        <TiSocialLinkedin style={{ color:'#0A66C2' }}/>
                                    </SocialLink>
                                )}
                                {twitter && (
                                    <SocialLink
                                        path={twitter}
                                        title="Twitter">
                                        <TiSocialTwitter style={{ color:'#1DA1F2' }}/>
                                    </SocialLink>
                                )}
                                
                                {instagram && (
                                    <SocialLink
                                        path={instagram}
                                        title="Instagram">
                                        <TiSocialInstagram style={{ color:'#C81BD9'}}/>
                                    </SocialLink>
                                )}
                                
                            </Social>
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    )
}

Footer.propTypes = {
    bgcolor: PropTypes.string,
    reveal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Footer.defaultProps = {
    bgcolor: '#1c1c1c',
    reveal: 'false',
    copyrightStyle: {
        color: 'rgb(171, 171, 171)',
        responsive: {
            small: {
                pb: '15px'
            }
        }
    }
};

export default Footer
