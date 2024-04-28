import './NavBar.css'
import loc from '../../assets/loc.svg'
import tel from '../../assets/tel.svg'

const NavBar = () => {
    return ( 
        <nav>
            <ul className='ul-1'>
                <li><a href="">О Нас</a></li>
                <li><a href="">Магазины</a></li>
                <li><a href="">Оплата и Доставка</a></li>
                <li><a href="">Статус заказа</a></li>
                <li><a href="">Возврат</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
            <ul className='ul-2'>
                <li><a href=""><img className='img' src={loc}/></a><a href=""> Москва</a></li>
                <li><a href=""><img className='img' src={tel}/></a><a href="tel:+7(812)834-84-88"> +7 (812) 834-84-88</a></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;