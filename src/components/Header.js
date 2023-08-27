import { StyledHeader } from "./styles/Header.styled"
import React, {useState} from "react"
// import { ButtonWrapper } from "./styles/Header.styled"

const Header = () => {
    const buttons = ["Why us?",
                <button className="custom-button">
                    <span>Your pains</span>
                    <p>Our fixes</p> 
                </button>,
            "Growth","Eye-openers","Customers","Hop on a call"]

            const [showButtons, setShowButtons] = useState(false);
    return (
        <div>
            <StyledHeader >
                <div className="image-and-buttons">
                    <img src="https://growth.cx/wp-content/uploads/2023/02/Growthcx.png"/>

                    <div className="buttons-on-top"> 
                        {buttons.map((buttonText,index) => (
                            <button key={index}>{buttonText}</button>
                            )) 
                        }
                    </div>
                    <img 
                        className="hamburger-click" 
                        src="https://res.cloudinary.com/dj0nbhjiy/image/upload/v1693123178/Screenshot_2023-08-27_132842_nsnwdw.png"
                        onClick={() => setShowButtons(!showButtons)} // Toggle state on click
                        />
                </div>
                    {/* To Display vertical list of Header buttons on clicking the  hamburger button*/}
                  {showButtons && (
                    <div className="vertical-buttons">
                        {buttons.map((buttonText,index) => (
                            <button key={index}>{buttonText}</button>
                        ))
                        }
                    </div>
                  )}  
                    
            </StyledHeader>
        </div>
    )
}
export default Header;