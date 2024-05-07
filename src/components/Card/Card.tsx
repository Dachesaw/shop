import './Card.css'
import { Link, json } from 'react-router-dom'
import like from '../../assets/like.svg'
import rating from '../../assets/raiting.svg'
import notice from '../../assets/notice.svg'

type CardProps = {
    image_src: string;
    ItemName: string;
    Price: number;
    Rating: number;
    Sale: number;
};


const Card = (item: CardProps) => {
    return (
        <div className="card-wrap">
            
                <div className="sale">
                    <span className="sale-element">-{item.Sale}%</span>
                    {/* <span className="sale-element">Товар без рекламы</span> */}
                </div>
                <div className="container-img">
                    <Link to={"ItemPage"} >
                        <img src={item.image_src} alt="" className='item-page-class' /> 
                    </Link>
                    <ul className="progres-wrap">
                        <li>
                            <button className="progres-btn"></button>
                        </li>
                        <li>
                            <button className="progres-btn"></button>
                        </li>
                        <li>
                            <button className="progres-btn"></button>
                        </li>
                        <li>
                            <button className="progres-btn"></button>
                        </li>
                        <li>
                            <button className="progres-btn"></button>
                        </li>
                    </ul>
                </div>
                <div className="container-rating">
                    <span className="rating">★ {item.Rating}</span>
                </div>
                <div className="device_name-container">
                    <Link to={"ItemPage"} className='link-class'>
                        <h3 className="device_name">{item.ItemName}</h3>
                    </Link>
                </div>
                <div className="price-container">
                    <span className="price-main">{item.Price} ₽</span>
                    <del className="price-sale">{item.Price * 2}₽</del>
                </div>
                <div className="button-bug-container">
                    <button className="bug">В корзину</button>
                </div>
                <div className="button-container">
                    <button className="btn-var">
                        <img id="like" src={like} alt="" />
                    </button>
                    <button className="btn-var">
                        <img id="rating" src={rating} alt="" />
                    </button>
                    <button className="btn-var">
                        <img id="notice" src={notice} alt="" />
                    </button>
                </div>
        </div>
    );
};

export default Card;
