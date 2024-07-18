import styled from "styled-components";
import { GlobalStyle } from "../../globalStyles/globalStyle";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  .container {
    width: 80%;
    margin: 200px auto;
    .title {
      h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 28px;
      }
    }
    .contact {
      display: flex;
      align-items: center;
      gap: 200px;
      justify-content: space-between;
      .col-1 {
        .first {
          display: flex;
          flex-direction: column;
          gap: 10px;
          span {
            color: ${GlobalStyle.orangeColor};
          }
          margin-top: 30px;
          .f {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            .text {
              display: flex;
              flex-direction: column;
              gap: 10px;
              h3{
                color: #242424;
                font-weight: 400;
              }
            }
          }
        }
      }
      .col-2 {
        margin-top: 150px;
      }
    }
  }
`;
