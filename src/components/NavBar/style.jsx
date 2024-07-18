import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  margin: 0 auto;
  
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
        }
    }
  }
`;
