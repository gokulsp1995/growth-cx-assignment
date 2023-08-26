import { StyledTestimonials } from "./styles/Testimonials.styled";
import React from "react";

const Testimonials = (props) => {
  const testimonialClassName = (props.idValue) ? "testimonial odd" : "testimonial even";
    return(
      <StyledTestimonials>
        <div className={testimonialClassName}>
          <div className="testimonial-content">
              <img src={props.logo} alt={props.logo} className="logo-image" />
              <p className="testimonial-name">{props.name}</p>
              <p className="testimonial-position">{props.position}</p>
              <p className="testimonial-content">{props.content}</p>
              <p className="testimonial-services">Services provided:<br/><span>{props.service}</span></p>
          </div>
          <img src={props.image} className="person-image"/>
        </div>
    </StyledTestimonials>
    )
}
export default Testimonials;