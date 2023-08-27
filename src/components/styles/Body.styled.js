import styled from "styled-components"

export const StyledBody = styled.body`
    .body-element{
        margin-top: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        margin: 20px auto 40px;
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
        }
    }
`