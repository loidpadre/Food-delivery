import { Banner } from "../components/Banner/Index"
import { Cardapio } from "../components/Cardapio/Index"
import { Contact } from "../components/contactos/Index"
import { Footer } from "../components/footer/Index"

export const HomePage = () =>{
    return(
        <div>
            <Banner/>
            <Cardapio/>
            <Contact/>
            <Footer/>
        </div>
    )
}