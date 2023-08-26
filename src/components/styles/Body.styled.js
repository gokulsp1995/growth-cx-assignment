import styled from "styled-components"

export const StyledBody = styled.body`
    .body-element{
        margin-top: 300px;
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
        margin: 20px auto 40px;
    }
    h3{
        font-size: 35px;
    }
    @media (max-width: 768px) {
        .body-element{
            margin-top: 200px;
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
            font-size: 30px;
            margin: 20px 150px 40px;
            text-align: center;
        }
        h3{
            font-size: 30px;
            font-weight: 500;
        }
    }
`