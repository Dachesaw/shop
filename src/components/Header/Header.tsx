import burger from '../../assets/burger.svg'
import favorite from '../../assets/favorite.svg'
import login from '../../assets/login.svg'
import shop_basket from '../../assets/shop_basket.svg'
import search from '../../assets/search.svg'

import "./Header.css"

const Header = () => {
    return ( 
        <header>
            <ul>
                <li><button className='burger_button'><img src={burger}/>КАТАЛОГ</button></li>
                <li>
                    <form>
                        <input type="text"  name="text" className="search" placeholder='Поиск товара'/>
                        <button type="submit" className='button_search'><img src={search} alt="" /></button>
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