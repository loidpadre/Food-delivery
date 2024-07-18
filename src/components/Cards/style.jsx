import styled from "styled-components";
import { GlobalStyle } from "../../globalStyles/globalStyle";

export const Wrapper = styled.div`
  width: 300px;
  background-color: ${GlobalStyle.background};
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 1px 2px 3px gray;
  padding: 20px;
  border-radius: 10px;
  h1{
    font-size: 20px;
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  .bt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
            font-weight: bold;
        }
    .cart {
      background-color: black;
      padding: 10px;
      color: white;
      border-radius: 8px;
      display: flex;
      gap: 10px;
      
      .btns {
        
        cursor: pointer;
        display: flex;
        gap: 10px;
        
      }
      .icon {
          cursor: pointer;
        }
    }
  }
`;
