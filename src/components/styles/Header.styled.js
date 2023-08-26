import styled from "styled-components"

export const StyledHeader = styled.header`
    
    // width: 100%;
    display: flex;
    flex-direction: row;
    margin: 10px 10px;
    font-family: roboto;  
    // position: fixed;
    // border: 2px solid green;
    
    img {
        width: 150px;
    }
    button {
        width:10%;
        padding: 30px;
        width: 200px;
        font-size: 20px;
        font-weight:700;
        cursor: pointer;
        background-color: snow;
        border: none;
        white-space: nowrap; /* Prevent text from wrapping */
        // border: 2px solid red;

        /* Applying specific styling to the 5th button */
        &:nth-child(6) {
            background-color: #2d2d2d;
            color: snow;
            // height: 50px;
            font-size: 16px;
            padding: 10px;
            white-space: nowrap; /* Prevent text from wrapping */
    }
        
    }
    button:hover{
        border-bottom: 4px solid #2d2d2d;
    }
    
`
// export const ButtonWrapper = styled.div`
//     display: flex;
//     justify-content: space-around:
//     align-items: space-between;
//     color: red;
// `