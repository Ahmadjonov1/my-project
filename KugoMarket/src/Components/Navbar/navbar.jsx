import React from "react";
import Vector from "./Vector.png";
import Vector1 from "./Vector (1).png";
import Vector2 from "./Vector (2).png";
import V1ector from './V1ector.png';
import Vector3 from "./Vector (3).png";
import { NavLink } from "react-router";



const Navbar = () => {


  return (
    <div>
      <Route>
        <div className="top-bar">
          <div className="links">
            <NavLink>Сервис</NavLink>
            <NavLink>Сотрудничество</NavLink>
            <NavLink>Заказать звонок</NavLink>
            <div className="icons">
              <span><img src={Vector} alt="" /></span>
              <span><img src={Vector1} alt="" /></span>
              <span><img src={Vector2} alt="" /></span>
            </div>
          </div>
          <span>+7 (800) 505-54-61</span>
        </div>

        <div className="main-bar">
          <span className="logo"><NavLink className='link'>KUGOO</NavLink></span>

          <div className="search-box">
            <input type="text" placeholder="Искать самокат KUGO" />
            <button><img src={V1ector} alt="" /></button>
          </div>

          <div className="cart">
            <span><img src={Vector3} alt="" /></span>
            <Route path="/Корзина" element={<Basket />} />
          </div>
        </div>
      </Route>
    </div>
  );
};

export default Navbar;