import burger from "../../assets/burger.svg";
import favorite from "../../assets/favorite.svg";
import login from "../../assets/login.svg";
import shop_basket from "../../assets/shop_basket.svg";
import search from "../../assets/search.svg";

import { useState } from "react";
import ModalContent from "../ModalContent/ModalContent";
import "./Header.css";

const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <header>
            
            <ul>
                <li>
                    <button className="burger_button btn-click"><img src={burger} />КАТАЛОГ</button>
                </li>
                <li>
                    <form>
                        <input type="text"name="text"className="search"placeholder="Поиск товара"/>
                        <button type="submit" className="button_search"><img src={search} alt="" /></button>
                    </form>
                </li>
            </ul>
            <ul className='ul_2'>
                <li>
                    <button className="btn-click"><img src={favorite} alt="" width={25} /></button>
                    <button className="btn-click">Избранное</button>
                    </li>
                <li>
                    <button className="btn-click"><img src={shop_basket} alt="" width={25}/></button>
                    <button className="btn-click">Корзина</button>
                </li>
                <li>
                    <button className="open-btn accent-color btn-click" onClick={() => setModalActive(true)}><img src={login} alt="" width={25}/></button>
                    <button className="open-btn accent-color btn-click" onClick={() => setModalActive(true)}>Войти</button>
                </li>
            </ul>
            <ModalContent active={modalActive} setActive={setModalActive}/>
        </header>

    );
};

export default Header;
