import { useEffect, useState } from "react";
import { Wrapper } from "./cartStyle";
import { CiCircleRemove } from "react-icons/ci";

export const Cart = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartList(JSON.parse(storedCart));
    }
  }, []);

  const handleIncrementQuantity = (id) => {
    const updatedCart = cartList.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartList(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecrementQuantity = (id) => {
    const updatedCart = cartList.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCartList(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) =>{
      const newListProd = cartList.filter((item) => item.id != id)
      setCartList(newListProd)
      localStorage.setItem("cart", JSON.stringify(newListProd));
  }
  return (
    <Wrapper>
      <div className="cart-list">
        <div className="container">
          {
            cartList.length === 0 && "Carrinho vazio"
          }
          <div className="text">
            <h2>Total: {total.toFixed(2)}</h2>
            <button>Confirmar compra</button>
          </div>
        {cartList.map((item) => (
          <div className="card" key={item.id}> 
          <CiCircleRemove size={30} className="remove" onClick={() => handleRemove(item.id)}/>
            <img src={item.img} alt="" />
            <div className="info">
              <h3>{item.name}</h3>
              <span>R$ {item.price}</span>
              <p>{item.description}</p>
              <div className="btns">
                <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                <h4>{item.quantity}</h4>
                <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
              </div>
            </div>
          </div>
          
        ))}
        </div>
      </div>
    </Wrapper>
  );
};
