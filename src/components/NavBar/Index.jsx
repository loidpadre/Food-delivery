import { Wrapper } from "./style"
import { IoMdCart } from "react-icons/io";
import LOGO from "../../assets/logo.png"
import { GlobalStyle } from "../../globalStyles/globalStyle";
import { Link } from "react-router-dom";
export const NavBar = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="col-1">
                <div className="logo">
                    <img src={LOGO} alt="logotipo" />
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/"><li>Home</li></Link> 
                        <li>Cardapio</li>
                        <li>Contactos</li>
                    </ul>
                </div>
                </div>
                <div className="col-2">
                    <span>+55 8577883366</span>
                    <div className="cart">
                    <Link to="/cart"> <IoMdCart size={28} color={GlobalStyle.bannerColor} /></Link>
                    </div>
                </div>
                
            </div>
        </Wrapper>
    )
}