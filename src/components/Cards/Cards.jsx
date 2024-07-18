import { IoMdCart } from "react-icons/io";
import { GlobalStyle } from "../../globalStyles/globalStyle";
import { Wrapper } from "./style";
export const Cards = ({items}) => {
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
          <IoMdCart className="icon" size={20} color={GlobalStyle.bannerColor} />
        </div>
      </div>
    </Wrapper>
  );
};
