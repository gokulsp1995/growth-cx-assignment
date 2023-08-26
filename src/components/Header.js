import { StyledHeader } from "./styles/Header.styled"
// import { ButtonWrapper } from "./styles/Header.styled"

const Header = () => {
    const buttons = ["Why us?", "Our fixes", "Growth","Eye-openers","Customers","Hop on a call"]
    return (
        <div>
            <StyledHeader >
                <h1></h1>
                <div classname="image-and-buttons">
                <img src="https://growth.cx/wp-content/uploads/2023/02/Growthcx.png"/>
                    <div className="buttons-on-top"> 
                    {buttons.map((buttonText,index) => (
                        <button key={index}>{buttonText}</button>
                        )) 
                    }
                    </div> 
                </div>
            </StyledHeader>

        </div>
    )
}
export default Header