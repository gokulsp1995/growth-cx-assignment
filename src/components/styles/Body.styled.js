import styled from "styled-components"

export const StyledBody = styled.body`
    .body-element{
        margin-top: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .background-image{
        background-image: url("https://res.cloudinary.com/dj0nbhjiy/image/upload/v1693122162/Screenshot_2023-08-27_125942_3_hgopbc.jpg");
        background-size: 100%;
    }
    h1{
        margin-top: 30px;
        text-align: center;
        font-size: 45px;
    }
    article{
        font-weight: 500;
        font-size: 30px;
        text-align: center;
        margin: 50px auto 70px;
    }
    h3{
        font-size: 35px;
        text-align: center;
    }
    @media (max-width: 768px) {
        .body-element{
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .background-image{
            background-image: url("https://res.cloudinary.com/dj0nbhjiy/image/upload/v1693129220/Bg_mobile_kazkz7.png");
            background-size: 100%;
        }
        h1{
            margin: 20px 60px;
            text-align: center;
            font-size: 35px;
        }
        article{
            font-weight: 300;
            font-size: 20px;
            margin: 20px 50px 40px;
            text-align: center;
        }
        h3{
            font-size: 25px;
            font-weight: 500;
            margin-bottom: 200px;
        }
    }
`