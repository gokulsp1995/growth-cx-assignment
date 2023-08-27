import styled from "styled-components"

export const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
    background-color: #FFFFFF;
    // margin: 10px 10px;
    font-family: roboto;  
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    margin:0;
    .image-and-buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }
    img {
        width: 190px;
        margin: 30px 0 25px 30px;
    }
    .hamburger-click{
        display: none;
    }
    button {
        width:10%;
        padding: 5px;
        width: 140px;
        height: 87px;
        font-size: 18px;
        font-weight:700;
        cursor: pointer;
        background-color: #FFFFFF;
        border: none;
        margin: 2px;
        justify-content: flex-end;
        white-space: nowrap; /* Prevent text from wrapping */
        // border: 2px solid red;
        &:nth-child(2) {
            font-size: 16px
            white-space: wrap; /* Prevent text from wrapping */
    }
        /* Applying specific styling to the 5th button */
        &:nth-child(6) {
            background-color: #2d2d2d;
            color: snow;
            height: 50px;
            font-size: 16px;
            padding: 10px;
            border-radius: 5px;
            white-space: nowrap; /* Prevent text from wrapping */
            margin-right: 10px;
        }
    }
    button:hover{
        &:nth-child(2){
            border: none;

        }
    }
    button:hover{
        border-bottom: 4px solid #2d2d2d;
        border-spacing: 10px;
    }
    .custom-button{
        line-height: 3px;
    }
    span {
        font-family: 'Cedarville Cursive', cursive;
        text-decoration: line-through;
        margin:0;
    }
    
    @media (max-width:768px) {
        .buttons-on-top{
            display: none;
        }
        .hamburger-click{
            display: block;
            width: 50px;
            margin: 5px;
            cursor: pointer;
        }
        .hamburger-click:hover{
            display: block;
            width: 55px;
            margin: 5px;
            cursor: pointer;
        }
        .hamburger-click:onclick{
            display: block;
            width: 60px;
            margin: 5px;
            cursor: pointer;
        }
        
          /* Show the vertical buttons list when showButtons is true */
          .vertical-buttons {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align=items: center;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: white;
                box-shadow: 0px 4px 10px #2d2d2d;
                margin-top:0;
                margin-left: 78%;
                // border-radius:5px;

                button{
                    padding: 5px;
                    height: 50px;
                    font-size: 18px;
                    font-weight:700;
                    cursor: pointer;
                    background-color: #FFFFFF;
                    border: none;
                    margin: 2px;
                    justify-content: flex-end;
                    white-space: nowrap; /* Prevent text from wrapping */
                    &:nth-child(6) {
                        background-color: #2d2d2d;
                        color: snow;
                        height: 50px;
                        font-size: 16px;
                        padding: 10px;
                        border-radius: 5px;
                        white-space: nowrap; /* Prevent text from wrapping */
                        margin-right: 10px;
                    }
                }
                button:hover{
                    border-bottom: 4px solid #2d2d2d;
                    border-spacing: 10px;
                    &:nth-child(2){
                        border: none;
                        margin-bottom: 10px;
                    }
                    

                }
                /* Applying specific styling to the 5th button */
                
          }
            // .show-buttons .vertical-buttons {
            //     display: block;
            // }
    }
    
`
// export const ButtonWrapper = styled.div`
//     display: flex;
//     justify-content: space-around:
//     align-items: space-between;
//     color: red;
// `