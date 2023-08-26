import styled from "styled-components"

export const StyledFooter = styled.footer`
    h1{
        font-size: 50px;
        color: snow;
        text-align: center;
    }
    .footer-component {
        background-color: #2d2d2d;
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items:center;
        margin-top: 150px;
    }
    button{
        width:200px;
        font-size: 18px;
        padding: 10px 20px;
        margin:auto;
        border-radius: 8px;
        font-weight: 700;
        cursor: pointer;
        background-color:snow;
    }
    button:hover{
        background-color:#2d2d2d;
        color: snow;
        transition: 0.4s;
    }
    .footer-terms{
        color: snow;
        display: flex;
        justify-content: space-around;
        margin: 30px 20px;
        
    }
    .our-fixes{
    }
    .footer-titles{
        font-weight:100;
        font-size: 14px;

        &:nth-child(1){
            font-weight: 400;
            font-size:18px;
            margin-bottom: 18px;
        } 
    }
    .copyright{
        margin: auto;
        color:snow;
        font-weight: 100;
        font-size: 14px;
    }
    @media (max-width:768px){
        h1{
            font-size: 30px;
            color: snow;
            text-align: center;
        }
        button{
            width:150px;
            font-size: 14px;
            padding: 10px 20px;
            margin:auto;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            background-color:snow;
        }
        .footer-terms{
            color: snow;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 30px 20px;
            text-align:center;
        }

    }
`