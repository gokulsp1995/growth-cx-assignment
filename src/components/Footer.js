import { StyledFooter } from "./styles/Footer.styled";
import React from "react";

const Footer = () => {
    // Declaring arrays for mapping the footer elements
    const ourFixes =["Our fixes", "Team", "Expert", "Content"];
    const community =["Community", "About Us", "Contact Us", "Privacy", "Terms"]
    const resources =["Resources", "Eye-Openers", "Buzz"]
    const social =["LinkedIn", "Twitter","Facebook","Instagram"]
    return(
        <StyledFooter>
            <img src="https://growthcx-website-assets.s3.ap-south-1.amazonaws.com/commons/footer-desk.svg"/>
            <div className="footer-component">
                    <h1> Set the foundation for an<br/> aggressive growth</h1>
                    <button>Hop on a call</button>
                    <div className="footer-terms">
                        <div className="our-fixes">
                            {ourFixes.map((terms,index) => (
                                <p className="footer-titles" key={index}>{terms}</p>
                                ))
                            }   
                        </div>
                        <div className="community">
                            {community.map((terms,index) => (
                                <p className="footer-titles" key={index}>{terms}</p>
                                ))
                            }   
                        </div>
                        <div className="resources">
                            {resources.map((terms,index) => (
                                <p className="footer-titles" key={index}>{terms}</p>
                                ))
                            }   
                        </div>
                        <div className="social">
                            {social.map((terms,index) => (
                                <p className="footer-titles" key={index}>{terms}</p>
                                ))
                            }   
                        </div>
                    </div>
                    <p className="copyright">©Copyright 2020 Growth.cx</p>
            </div>
        </StyledFooter>
    )
}
export default Footer;