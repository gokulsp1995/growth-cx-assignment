import styled from "styled-components"

export const StyledTestimonials = styled.div`
    .testimonial{
        border: 7px solid #2d2d2d;
        border-radius: 40px;
        width: 700px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start; /* Align testimonial content to the start */
        margin: 30px 40px;
    }
    p{
        font-size: 18px;
    }
    .odd{
        background-color: snow;
        margin-right: 250px;
    }
    .even{
        background-color: snow;
        flex-direction: row-reverse;
        margin-left: 30%;
        // float: right;
    }
    .person-image{
        width: 220px;
    }
    .logo-image {
        width: 140px;
    }
`
