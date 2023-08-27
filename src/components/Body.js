import { StyledBody } from "./styles/Body.styled";
import React from "react";


const Body = () => {
    return(
        
        <StyledBody >
            <div className="background-image">
                <div className="body-element">
                    <h1>Somebody told us sharing customer<br/> testimonials adds credibility.</h1>
                    <article>So sharing some of them for the sake of it!</article>
                    <h3>A few of our happy customers</h3>
                </div>
            </div>
        </StyledBody>
        
    )
}
export default Body;