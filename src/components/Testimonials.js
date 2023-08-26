import { StyledTestimonials } from "./styles/Testimonials.styled";
import React from "react";

const Testimonials = (props) => {
  const testimonialClassName = (props.idValue) ? "testimonial odd" : "testimonial even";
    return(
      <StyledTestimonials>
        <div className={testimonialClassName}>
          {/* <div className="image-content-services"> */}
            {/* <div className="image-and-content"> */}
              <div className="testimonial-content">
                  <img src={props.logo} alt={props.logo} className="logo-image"/>
                  <p className="testimonial-name">{props.name}</p>
                  <p className="testimonial-position">{props.position}</p>
                  <p className="testimonial-para">{props.content}</p>
                  <p className="testimonial-services">Services provided:</p>
                  <div className="service-list">
                    {props.service.map((service, index) => (
                        <span key={index} className="service-item">{service}</span>
                    ))} 
                   </div>
              </div>
              <img src={props.image} className="person-image"/>
                    
          {/* </div> */}
        </div>
        
    </StyledTestimonials>
    )
}
export default Testimonials;