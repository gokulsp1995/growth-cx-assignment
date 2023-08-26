import React from "react";
import testimonialsData from "./TestimonialsData";
const Testimonials = (props) => {
    return(
        <div className="testimonial">
        <img src={props.logo} alt={props.logo} className="logo-image" />
        <div className="testimonial-content">
          <p className="testimonial-name">{props.name}</p>
          <p className="testimonial-position">
            {props.position}
          </p>
          <p className="testimonial-content">{props.content}</p>
          <p className="testimonial-services">Services provided:<br/><span>{props.service}</span></p>
        </div>
        <div className="dialogue-pointer"></div>
    </div>
    )
}
export default Testimonials;