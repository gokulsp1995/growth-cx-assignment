import styled from "styled-components"

export const StyledTestimonials = styled.div`
    .testimonial{
        border: 7px solid #2d2d2d;
        border-radius: 40px;
        width: 700px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start; 
        margin: 30px 40px;
    }
    p{
        font-size: 18px;
    }
    
    .person-image{
        width: 220px;
        margin-top: 20px;
    }
    .testimonial-name{
        font-weight: 700;
        font-size: 16px;
        margin-bottom:0;
    }
    .testimonial-position{
        margin-top: 0;
        font-weight: 700;
        font-size: 14px;
    }
    .logo-image {
        width: 140px;
    }
    .testimonial-content{
        margin: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .testimonial-services{
        margin-top: 0;
        font-weight: 700;
        font-size: 12px;
    }

    .service-item {
        display: flex;
        flex-direction: row;
        background-color: #EDEDED;
        margin: 5px;
        padding: 5px 7px;
        color: #2d2d2d;
        text-wrap: wrap;
    }
    .service-list{
        display: flex;
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
    @media (max-width: 768px) {
        .testimonial{
            border: 7px solid #2d2d2d;
            border-radius: 40px;
            width: 400px;
            display: flex;
            justify-content: center;
            // align-items: center; 
            margin: 30px 40px;
            height:400px;
        }
        .person-image{
            width: 100px;
            margin: 10px
            border: 1px solid #2d2d2d;
            align-self: flex-start;
        }
        .testimonial-para{
            font-size: 14px;
        }
        .testimonial-services{
            margin-top:25px;
        }
        .service-item {
            background-color: #EDEDED;
            margin: 5px;
            padding: 5px 7px;
            color: #2d2d2d;
            font-size: 12px;
        }
        .logo-image {
            width: 120px;
        }
    }
`
