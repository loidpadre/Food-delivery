import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { GlobalStyle } from "../../globalStyles/globalStyle";
import { Wrapper } from "./style";
import data from "../../data/data";

export const Cards = ({ items }) => {
  const [prodCartList, setProdCarList] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setProdCarList(storedCart);
  }, []);

  const handleAddCart = (id) => {
    const prod = data.find((item) => item.id === id);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar se o produto já está no carrinho
    const existingProductIndex = storedCart.findIndex(item => item.id === id);

    if (existingProductIndex >= 0) {
      // Incrementar a quantidade se o produto já estiver no carrinho
      storedCart[existingProductIndex].quantity += 1;
    } else {
      // Adicionar o produto ao carrinho com quantidade inicial de 1
      storedCart.push({ ...prod, quantity: 1 });
    }

    // Atualizar o estado e o localStorage
    setProdCarList(storedCart);
    localStorage.setItem('cart', JSON.stringify(storedCart));
  };

  const handleIncrementQuantity = (id) => {
    const updatedCart = prodCartList.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setProdCarList(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecrementQuantity = (id) => {
    const updatedCart = prodCartList.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
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
            <span onClick={() => handleDecrementQuantity(items.id)}>-</span>
            <span>
              {
                prodCartList.find(item => item.id === items.id)?.quantity || 0
              }
            </span>
            <span onClick={() => handleIncrementQuantity(items.id)}>+</span>
          </div>
          <IoMdCart
            className="icon"
            size={20}
            color={GlobalStyle.bannerColor}
            onClick={() => handleAddCart(items.id)}
          />
        </div>
      </div>
    </Wrapper>
  );
};
