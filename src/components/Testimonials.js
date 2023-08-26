import React from "react";
import testimonialsData from "./TestimonialsData";
const Testimonials = (props) => {
    return(
        <div className="testimonial">
      <img src={props.image} alt={`${props.name}'s Photo`} className="testimonial-image" />
      <div className="testimonial-content">
        <p className="testimonial-text">{props.testimonial}</p>
        <p className="testimonial-author">
          {props.name}, {props.position} at {props.company}
        </p>
        <p className="testimonial-service">Service: {props.service}</p>
      </div>
      <div className="dialogue-pointer"></div>
    </div>
    )
}
export default Testimonials;