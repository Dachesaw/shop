import './Card3.css'
import service from '../../assets/service.png'
import like from '../../assets/like.svg'
import rating from '../../assets/raiting.svg'
import notice from '../../assets/notice.svg'

const Card3 = () => {
    return ( 
        <div className="card-wrap">
            <div className="sale">
                {/* <span className='sale-element'>-39%</span> */}
                {/* <span className='sale-element'>Финальная цена</span> */}
            </div>
            <div className="container-img">
                <img src={service} alt="" />
                <ul className='progres-wrap'>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li> 
                </ul>
            </div>
            <div className="container-rating">
                <span className='rating'>★ 5.0</span>
            </div>
            <div className="device_name-container">
                <h3 className='device_name'>Настройка SMART TV</h3>
            </div>
            <div className="price-container">
                <span className='price-main'>1 200 ₽</span>
                <del className='price-sale'>3000 ₽</del>
            </div>
            <div className='button-bug-container'>
                <button className='bug'>В корзину</button>
            </div>
            <div className='button-container'>
                <button className='btn-var'><img  id='like' src={like} alt="" /></button>
                <button className='btn-var'><img  id='rating' src={rating} alt="" /></button>
                <button className='btn-var'><img  id='notice' src={notice} alt="" /></button>
            </div>
        </div>
     );
}
 
export default Card3;