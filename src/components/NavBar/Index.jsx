import { Wrapper } from "./style"
import { IoMdCart } from "react-icons/io";
import LOGO from "../../assets/logo.png"
import { GlobalStyle } from "../../globalStyles/globalStyle";
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
                        <li>Home</li>
                        <li>Cardapio</li>
                        <li>Contactos</li>
                    </ul>
                </div>
                </div>
                <div className="col-2">
                    <span>+55 8577883366</span>
                    <div className="cart">
                    <IoMdCart size={28} color={GlobalStyle.bannerColor} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}