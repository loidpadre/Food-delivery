import IMG from "../../assets/logo.png"
import { Wrapper } from "./style"
export const Footer = () =>{
    return(
        <Wrapper>
            <div className="container">
                <div className="col-1">
                    <h1>Food deliver</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste?</p>
                    <ul>
                        <li>Home</li>
                        <li>Cardapio</li>
                        <li>contact</li>
                        <li>&copy; 2024 food delivery. Todos os direitos reservados.</li>
                    </ul>
                    
                </div>
                <div className="col-2">
                    <img src={IMG} alt="" />
                </div>
            </div>
        </Wrapper>
    )
}