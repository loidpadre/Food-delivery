import { Wrapper } from "./style";
import { Cards } from "../Cards/Cards";
import { useEffect, useState } from "react";
export const Cardapio = () => {
  const URL = "https://back-end-delivey-app.onrender.com";

  const [data, setData] = useState([]);
  const getProd = async () => {
    try {
      const response = await fetch(`${URL}/home`);
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  useEffect(() => {
    getProd();
  }, []);
  return (
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
            <li>Ver Cardapio</li>
          </ul>
        </div>
        <div className="cards">
          {data.map((items) => (
            <Cards items={items} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
