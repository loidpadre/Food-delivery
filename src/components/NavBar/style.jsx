import styled from "styled-components";
import { GlobalStyle } from "../../globalStyles/globalStyle";

export const Wrapper = styled.nav`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  background-color: ${GlobalStyle.orangeColor};
  z-index: 1000;
  .container {
    display: flex;
    gap: 60px;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    
    .col-1 {
      display: flex;
      align-items: center;
      .logo {
        img {
          width: 150px;
        }
      }
      .menu {
        ul {
          display: flex;
          gap: 10px;
          li {
            list-style: none;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 500;
            transition: 0.5s ease;
            cursor: pointer;
            &:hover{
              color: white;
            }
          }
        }
      }
    }
    .col-2{
      z-index: 1000;
        display: flex;
        gap: 10px;
        align-items: center;
        span{
            font-size: 14px;
            font-weight: bold;
            transition: 0.5s ease;
            color: white;
            cursor: pointer;
            &:hover{
              color: black;
            }
        }
    }
  }
`;
