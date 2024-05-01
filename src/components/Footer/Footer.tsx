import phoneIcon from "../../assets/tel.svg";
import mailIcon from "../../assets/email.svg";

import facebook_logo from "../../assets/social-networks/facebook-logo.svg";
import tg_logo from "../../assets/social-networks/tg-logo.svg";
import insta_logo from "../../assets/social-networks/insta-logo.svg";
import ok_logo from "../../assets/social-networks/ok-logo.svg";
import vk_logo from "../../assets/social-networks/vk-logo.svg";
import yt_logo from "../../assets/social-networks/yt-logo.svg";

import visa from "../../assets/payment-methods/visa.svg";
import mastercard from "../../assets/payment-methods/mastercard.svg";
import mir from "../../assets/payment-methods/mir.svg";
import gpay from "../../assets/payment-methods/gpay.svg";

import "./Footer.css";
export default function Footer() {
    return (
        <footer>
            <div>
                <h3>Компания</h3>
                <ul>
                    <li>
                        <a href="">О нас</a>
                    </li>
                    <li>
                        <a href="">Магазин</a>
                    </li>
                    <li>
                        <a href="">Блог</a>
                    </li>
                    <li>
                        <a href="">Вакансия</a>
                    </li>
                    <li>
                        <a href="">Контакты</a>
                    </li>
                    <li>
                        <a href="">Партнерская программая</a>
                    </li>
                </ul>

                <p id="trademark">© Проект, 2024</p>
            </div>
            <div>
                <h3>Покупателям</h3>
                <ul>
                    <li>
                        <a href="">Как сделать заказ</a>
                    </li>
                    <li>
                        <a href="">Оплата и доставка</a>
                    </li>
                    <li>
                        <a href="">Статус заказа</a>
                    </li>
                    <li>
                        <a href="">Возврат</a>
                    </li>
                    <li>
                        <a href="">Юридическая информация</a>
                    </li>
                    <li>
                        <a href="">Политика персональных данных</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>На связи 24/7</h3>
                <ul>
                    <li>
                        <a href="tel:+7 (812) 834-84-88">
                            <img src={phoneIcon} alt="" />
                            +7 (812) 834-84-88
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={mailIcon} alt="" />
                            example@mail.com
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Подписаться на новости и акции</h3>
                <form action="email">
                    <div>
                        <input type="email" placeholder="E-mail" />
                        <button id="subscribe-button">Подписаться</button>
                    </div>
                    <p>
                        Нажимая «Подписаться», я даю согласие на получение
                        рекламной рассылки и обработку{" "}
                        <a className="accent-color" href="">
                            персональных данных
                        </a>
                    </p>
                </form>
                <h3>Мы в социальных сетях</h3>
                <ul className="icons-container">
                    <li>
                        <a href="">
                            <img src={yt_logo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={insta_logo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={facebook_logo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={vk_logo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={tg_logo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={ok_logo} alt="" />
                        </a>
                    </li>
                </ul>
                <h3>Мы принимаем к оплате</h3>
                <ul className="icons-container">
                    <li>
                        <a href="">
                            <img src={visa} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={mastercard} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={mir} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={gpay} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
