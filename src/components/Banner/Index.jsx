import { Wrapper } from "./style";
import BANNER from "../../assets/banner1.png";
import { IoFastFood } from "react-icons/io5";
import { useEffect, useState } from "react";
export const Banner = () => {

  return (
    <Wrapper>
      <div className="container">
        <div className="top">
          <div className="col-1">
            <ul>
              <li>Rapido</li>
              <li>Facil</li>
              <li>Delicioso</li>
            </ul>
            <div className="title">
              <h1>
                Faça o seu pedido, e <span>saborea</span> o que te faz feliz!
              </h1>
            </div>
            <button>
              Fazer Pedido
              <IoFastFood size={20}/>
            </button>
          </div>
          <div className="col-2">
            <div className="circle"></div>
            <img src={BANNER} alt="" />
          </div>
        </div>
        <div className="bootom">
            <marquee direction="left">
                <ul>
                    <li className="hamburger">HAMBURGER</li>
                    <li className="refri">REFRIGERANTE</li>
                    <li className="pizza">PIZZA</li>
                    <li className="cosq">COSQUINHA</li>
                    <li className="must">MUSTARDA</li>
                </ul>
            </marquee>
        </div>
      </div>
    </Wrapper>
  );
};
