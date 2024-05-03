import "./Card.css";
import phone from "../../assets/phone2.png";
import like from "../../assets/like.svg";
import rating from "../../assets/raiting.svg";
import notice from "../../assets/notice.svg";
import { Link } from "react-router-dom";

type CardProps = {
    ItemName: string;
    Price: number;
};

const Card = (item: CardProps) => {
    return (
        <div className="card-wrap">
            <Link to={"ItemPage"}>
                <div className="sale">
                    <span className="sale-element">-39%</span>
                    <span className="sale-element">Товар без рекламы</span>
                </div>
                <div className="container-img">
                    <img src={phone} alt="" />
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
                    <span className="rating">★ 4.8</span>
                </div>
                <div className="device_name-container">
                    <h3 className="device_name">{item.ItemName}</h3>
                </div>
                <div className="price-container">
                    <span className="price-main">{item.Price} ₽</span>
                    <del className="price-sale">50085 ₽</del>
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
            </Link>
        </div>
    );
};

export default Card;
