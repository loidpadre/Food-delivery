import styled from "styled-components";
import { GlobalStyle } from "../globalStyles/globalStyle";

export const Wrapper = styled.div`
  .cart-list {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .container {
      margin-top: 200px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      position: relative;
      .text {
        margin-bottom: 60px;
        position: fixed;
        top: 190px;
        right: 140px;
        button {
          padding: 10px 14px;
          border: none;
          border-radius: 8px;
          background-color: ${GlobalStyle.orangeColor};
          color: white;
          font-size: 18px;
          margin-top: 10px;
          transition: 0.5s ease;
          cursor: pointer;
          &:hover {
            background-color: ${GlobalStyle.bannerColor};
          }
        }
      }
      .card {
        margin-top: 30px;
        text-align: left;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        width: 50%;
        display: flex;
        align-items: center;
        position: relative;
        gap: 10px;
        .remove {
          position: absolute;
          right: 20px;
          top: 10px;
          transition: 0.5s ease;
          &:hover {
            color: ${GlobalStyle.orangeColor};
            cursor: pointer;
          }
        }
        img {
          width: 150px;
          object-fit: cover;
          border-radius: 8px;
        }

        .info {
          margin-left: 20px;

          h3 {
            margin-bottom: 5px;
          }

          span {
            display: block;
            margin: 5px 0;
            font-size: 18px;
            font-weight: bold;
          }

          p {
            width: 100%;
            margin-top: 8px;
            color: #2e2e2e;
          }

          .btns {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;

            button {
              padding: 5px 10px;
              font-size: 18px;
              border-radius: 8px;
              border: none;
              background-color: ${GlobalStyle.orangeColor};
              color: white;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
