import './PopularCategory.css'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

import phone from '../../assets/phone.png'
import washing from '../../assets/washing.png'
import vacum from '../../assets/vacum.png'
import fridge from '../../assets/fridge.png'
import tv from '../../assets/tv.png'
import microwave from '../../assets/microwave.png'

const PopularCategory = () => {
    return ( 
        <div className="popular-category">
                <h2>Популярные категории</h2>
                    <button className='buttons-ads-left' ><img src={left} alt="" /></button>
                    <button className='buttons-ads-right' ><img src={right} alt="" /></button>
                <div className="wrap-items-popular-cat">
                    <figure>
                        <img src={phone} alt="" />
                        <figcaption>
                            <a href="">Смартфоны</a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={washing} alt="" />
                        <figcaption>
                            <a href="">Стиральные<br />машины</a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={vacum} alt="" />
                        <figcaption>
                            <a href="">Пылесосы</a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={fridge} alt="" width={60} />
                        <figcaption>
                            <a href="">Холодильники</a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={tv} alt="" />
                        <figcaption>
                            <a href="">Телевизоры</a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={microwave} alt="" />
                        <figcaption>
                            <a href="">Микроволновые<br />печи</a>
                        </figcaption>
                    </figure>
                </div>
            </div>

     );
}
 
export default PopularCategory;