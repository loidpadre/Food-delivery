import styled from "styled-components";
import { GlobalStyle } from "../../globalStyles/globalStyle";

export const Wrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    .container{
        width: 80%;
        margin: 60px auto;
        .title{
            text-align: center;
            h1{
                text-transform: uppercase;
            }
        }
        .filter{
            margin-top: 30px;
            text-align: center;
            ul{

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 30px;
                li{
                    cursor: pointer;
                    list-style: none;
                    text-transform: uppercase;
                    font-weight: bold;
                    color: ${GlobalStyle.orangeColor};
                    background-color: ${GlobalStyle.background};
                    padding: 10px 18px;
                    border: 1px solid ${GlobalStyle.bannerColor};
                    border-radius: 8px;
                }
            }
        }
        .cards{
            margin-top: 100px;
            display: grid;
            grid-template-columns: 25% 25% 25% 1fr;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }
    }

`