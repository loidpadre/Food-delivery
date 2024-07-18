import { IoMdCart } from "react-icons/io";
import { GlobalStyle } from "../../globalStyles/globalStyle";
import { Wrapper } from "./style";
import { useState } from "react";
import data from "../../data/data"
export const Cards = ({items}) => {
  const [prodCartList, setProdCarList] = useState([])

  const handleAddCart = (id) => {
    const prod = data.find((item) => item.id === id);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...storedCart, prod];
    setProdCarList(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
          <IoMdCart className="icon" size={20} color={GlobalStyle.bannerColor} onClick={() =>  handleAddCart(items.id)} />
        </div>
      </div>
    </Wrapper>
  );
};
