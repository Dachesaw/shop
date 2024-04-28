import burger from '../img/svg/burger.svg'
import favorite from '../img/svg/favorite.svg'
import login from '../img/svg/login.svg'
import shop_basket from '../img/svg/shop_basket.svg'
import search from '../img/svg/search.svg'

let search2 = <img src={search}/>

import "./Header.css"

const Header = () => {
    return ( 
        <header>
            <ul>
                <li><button><img src={burger}/>КАТАЛОГ</button></li>
                <li>
                    <form>
                        <input type="text"  name="text" className="search" placeholder='Поиск товара'/>
                        <input type="submit" name='submit' className='submit'/><img className='search-img' src={search}/>
                    </form>
                </li>
            </ul>
            <ul className='ul_2'>
                <li><img src={favorite} alt="" width={25} /><a href="">Избранное</a></li>
                <li><img src={shop_basket} alt="" width={25}/><a href="">Корзина</a></li>
                <li><img src={login} alt="" width={25}/><a href="">Войти</a></li>
            </ul>
            
        </header>
     );
}
 
export default Header;