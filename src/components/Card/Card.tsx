import './Card.css'
import phone from '../../assets/phone2.png'
import like from '../../assets/like.svg'
import rating from '../../assets/raiting.svg'
import notice from '../../assets/notice.svg'

const Card = () => {
    return ( 
        <div className="card-wrap">
            <div className="sale">
                <span className='sale-element'>-39%</span>
                <span className='sale-element'>Товар без рекламы</span>
            </div>
            <div className="container-img">
                <img src={phone} alt="" />
                <ul className='progres-wrap'>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li>
                   <li><button className='progres-btn'></button></li> 
                </ul>
            </div>
            <div className="container-rating">
                <span className='rating'>★ 4.8</span>
            </div>
            <div className="device_name-container">
                <h3 className='device_name'>Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</h3>
            </div>
            <div className="price-container">
                <span className='price-main'>21 770 ₽</span>
                <del className='price-sale'>50085 ₽</del>
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
 
export default Card;