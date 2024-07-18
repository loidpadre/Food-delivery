import styled from "styled-components";
import { GlobalStyle } from "../../globalStyles/globalStyle";

export const Wrapper = styled.header`
    width: 100%;
    margin: 0 auto;
    padding: 10px 0px;
    .container{
        width: 80%;
        margin: 50px auto;
        
        .top{
            display: flex;
        align-items: center;
        justify-content: space-around;
            .col-1{
            display: flex;
            flex-direction: column;
            gap: 10px;
            ul{
                display: flex;
                gap: 10px;
                li{
                    list-style: none;
                    text-transform: uppercase;
                    font-size: 15px;
                    color: ${GlobalStyle.orangeColor};
                }
            }
            .title{
                width: 550px;
                h1{
                    font-size: 55px;
                    text-transform: uppercase;
                }
                span{
                    color: ${GlobalStyle.orangeColor};
                    font-weight: 600;
                    &::after{
                        content: "";
                        width: 50%;
                        height: 3px;
                        background-color: ${GlobalStyle.orangeColor};
                        display: block;
                    }
                }
            }
            button{
                background-color: ${GlobalStyle.bannerColor};
                padding: 10px;
                border: none;
                border-radius: 8px;
                font-size: 18px;
                width: 160px;
                display: flex;
                color: white;
                gap: 10px;
                box-shadow: 1px 2px 3px gray;
            }
        }
        .col-2{
            position: relative;
            z-index: 1000;
            .circle{
                width: 500px;
                height: 500px;
                position: absolute;
                right: -190px;
                top: -280px;
                background-color: ${GlobalStyle.bannerColor};
                border-bottom-left-radius: 50%;
                border-bottom-right-radius: 50%;
                z-index: -1000;

            }
            img{ 
                width: 500px;
                object-fit: cover;
            }
        }
        }
        .bootom{
            margin-top: 90px;
            marquee{
                ul{
                    display: flex;
                    gap: 60px;
                    align-items: center;
                    li{
                        list-style: none;
                        font-size: 35px;
                        font-weight: bold;
                        color: ${GlobalStyle.orangeColor};
                        
                    }
                    .hamburger{
                            font-family: "Shadows Into Light", cursive;
                        }
                        .refri{
                            font-family: fantasy;
                        }
                        .pizza{
                            font-family: monospace;
                        }
                        .cosq{
                            font-family: cursive;
                        }
                        .must{
                            font-family: "Permanent Marker", cursive;
                        }
                }
            }
        }
    }
`