import { useEffect, useState } from "react"

export const Cart = () =>{
    const [cartList, setCartList] = useState([])

    useEffect(() =>{
        const storedCart = localStorage.getItem('cart')
        if(storedCart){
          setCartList(JSON.parse(storedCart))
        }
    }, [])
    return(
        <div>
            <div className="cart">
          <div className="text">
          <h1>Seu carrinho</h1>
          <span>Você esta no lugar certo, faça o seu pedido!</span>
          </div>
          <div className="cart-list">
            {
              cartList.map((item) =>(
                <div>
                  <img src={item.img} alt="" />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        </div>
    )
}