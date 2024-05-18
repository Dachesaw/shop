import phone1 from "../../assets/phone-images/phone-1.svg";
import phone2 from "../../assets/phone-images/phone-2.svg";
import phone3 from "../../assets/phone-images/phone-3.svg";
import phone4 from "../../assets/phone-images/phone-4.svg";
import phone5 from "../../assets/phone-images/phone-5.svg";
import shopIcon from "../../assets/shopIcon.svg";
import truckIcon from "../../assets/truckIcon.svg";
import favouriteIcon from "../../assets/favorite.svg";
import statiscticsIcon from "../../assets/statisticsIcon.svg";
import bellIcon from "../../assets/bellIcon.svg";
import left from "../../assets/left-ads-button.svg";
import right from "../../assets/right-ads-button.svg";
import "./AboutItem.css";

export default function AboutItem() {
    function ItemImgChange(e: any) {
        let oldMainImg = document.getElementById("main-item-image");
        let additionalImages = document.querySelectorAll(
            ".additional-item-image"
        );
        if (oldMainImg !== null) {
            (oldMainImg as HTMLImageElement).src = e.target.src;
            additionalImages.forEach((img) => {
                img.classList.remove("chosen-item-image");
            });
            e.target.classList.add("chosen-item-image");
        } else {
            alert("error");
        }
    }

    return (
        <section className="about-item-section">
            <h2>Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</h2>
            <span>-39%</span>
            <span>Товар из рекламы</span>
            <div className="item-container">
                <div id="photos-container">
                    <div className="main-img-container">
                        <img src={phone1} alt="" id="main-item-image" />
                    </div>
                    <div className="additional-image-scroll">
                        <button className="buttons-ads-left">
                            <img src={left} alt="" />
                        </button>
                        <button className="buttons-ads-right">
                            <img src={right} alt="" />
                        </button>
                        <img
                            src={phone1}
                            alt=""
                            className="additional-item-image chosen-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone2}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone3}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone4}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone5}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                    </div>
                </div>
                <div>
                    <h3>Цвет корпуса</h3>
                    <button className="choose-model-button choose-model-button-active">
                        Синий
                    </button>
                    <button className="choose-model-button">Темно-серый</button>
                    <h3>Основные характеристики</h3>
                    <p>Экран: 6.82" 720x1640 пикселей, IPS</p>
                    <p>Процессор:  MediaTek Helio G99 , 8 ядр., 2.2 ГГц</p>
                    <p>Память:  ОЗУ 8 ГБ , 128 ГБ</p>
                    <p>Формат физической SIM-карты:  Nano</p>
                    <p>Разрешение основного модуля камеры:  50 Мп</p>
                    <a href="">Все характеристики</a>
                </div>
                <div>
                    <p>В наличии</p>
                    <div>
                        <p>21 770 ₽</p>
                        <p>50085 ₽</p>
                        <p>Рассрочка от 267 ₽/мес.</p>
                        <button>Добавить в корзину</button>
                        <p>
                            {" "}
                            <img src={shopIcon} alt="" />
                            Самовывоз завтра, бесплатно
                        </p>
                        <p>
                            {" "}
                            <img src={truckIcon} alt="" />
                            Доставка завтра
                        </p>
                        <div>
                            <img src={favouriteIcon} alt="" />
                            <img src={statiscticsIcon} alt="" />
                            <img src={bellIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
