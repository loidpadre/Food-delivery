import { IoMdCart } from "react-icons/io";
import { GlobalStyle } from "../../globalStyles/globalStyle";
import { Wrapper } from "./style";
import { useState } from "react";
export const Cards = ({ items }) => {
  const [prodCartList, setProdCarList] = useState([]);
  const URL = "https://back-end-delivey-app.onrender.com";
  const handleAddCart = async (id) => {
    try {
      const response = await fetch(`${URL}/detail/${id}`);
      if (!response.ok) {
        throw new Error(
          `Erro ao buscar detalhes do produto: ${response.status} ${response.statusText}`,
        );
      }
      const prod = await response.json();
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(prod);
      localStorage.setItem("cart", JSON.stringify(cart));

      console.log("Produto adicionado ao carrinho:", prod);
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
    }
  };
  return (
    <Wrapper>
      <img src={items.img} alt="" />
      <h1>{items.name}</h1>
      <span>{items.description}</span>
      <div className="bt">
        <span>R$ {items.price}</span>
        <div className="cart">
          <div className="btns">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <IoMdCart
            className="icon"
            size={20}
            color={GlobalStyle.bannerColor}
            onClick={() => handleAddCart(items._id)}
          />
        </div>
      </div>
    </Wrapper>
  );
};
