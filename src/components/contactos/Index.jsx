import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Wrapper } from "./style";
import { GlobalStyle } from "../../globalStyles/globalStyle";
export const Contact = () =>{
    return(
        <Wrapper>
            <div className="container">
                <div className="title">
                <h1>Contact</h1>
                </div>
                <div className="contact">
                    <div className="col-1">
                        <div className="first">
                            <span>Fale conosco</span>
                            <div className="f">
                                <div className="icon">
                                <IoLogoWhatsapp size={28} color={GlobalStyle.orangeColor} />
                                </div>
                                <div className="text">
                                    <h3>Entrar em contact</h3>
                                    <p>+55 8577883366</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="first">
                            <span>Nosso Email</span>
                            <div className="f">
                                <div className="icon">
                                <FaPhone size={28} color={GlobalStyle.orangeColor} />
                                </div>
                                <div className="text">
                                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum doloremque maxime repellat at veritatis maiores exercitationem iure quis quasi nostrum! Eaque cumque, iusto fugit laborum reprehenderit necessitatibus delectus ipsa quisquam.</h3>
                                    <p>loidpadre@gmail.com</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9817612046913!2d-38.7305553742553!3d-4.223817245894594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bf35f9910cd685%3A0x45ac94eb11aa196a!2zUmVkZW7Dp8OjbywgQ0UsIDYyNzkwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1721328369574!5m2!1spt-BR!2sbr" width="800" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}