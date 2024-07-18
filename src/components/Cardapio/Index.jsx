import { Wrapper } from "./style"
import data from "../../data/data"
import { Cards } from "../Cards/Cards"
export const Cardapio = () =>{
    console.log(data)
    return(
        <Wrapper>
            <div className="container">
                <div className="title">
                    <h1>Cardapio</h1>
                </div>
                <div className="filter">
                    <ul>
                        <li>Refrigerante</li>
                        <li>Pizza</li>
                        <li>Hamburgeres</li>
                        <li>Ver Tudo</li>
                    </ul>
                </div>
                <div className="cards">
                    {
                        data.map((items) =>(
                            <Cards items={items} />
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    )
}