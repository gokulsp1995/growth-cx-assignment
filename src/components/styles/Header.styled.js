import styled from "styled-components"

export const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
    background-color: snow;
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
        width: 100%;
    }
    img {
        width: 190px;
        margin: 30px 0 25px 30px;
    }
    button {
        width:10%;
        padding: 5px;
        width: 140px;
        height: 100px;
        font-size: 20px;
        font-weight:700;
        cursor: pointer;
        background-color: snow;
        border: none;
        margin: 2px;
        justify-content: flex-end;
        white-space: nowrap; /* Prevent text from wrapping */
        // border: 2px solid red;
        &:nth-child(2) {
            font-size: 16px;
            // margin-bottom: 40px;
            // padding: 10px;
            // border-radius: 5px;
            // border-width: 0;
            // line-height: 110px;
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
    
    
`
// export const ButtonWrapper = styled.div`
//     display: flex;
//     justify-content: space-around:
//     align-items: space-between;
//     color: red;
// `