import './MainPage.css'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'
import phone from '../../assets/phone.png'
import washing from '../../assets/washing.png'
import vacum from '../../assets/vacum.png'
import fridge from '../../assets/fridge.png'
import tv from '../../assets/tv.png'
import microwave from '../../assets/microwave.png'

const MainPage = () => {
    return ( 
        <main>
            <div className="category">
                <ul>
                    <li><a href="">Смартфоны</a></li>
                    <li><a href="">Стиральные машины</a></li>
                    <li><a href="">Пылесосы</a></li>
                    <li><a href="">Холодильники</a></li>
                    <li><a href="">Телевизоры</a></li>
                    <li><a href="">Микроволновые печи</a></li>
                    <li><a href="">Наушники</a></li>
                    <li><a href="">Электрочайники</a></li>
                    <li><a href="">Вытяжки</a></li>
                </ul>
            </div>
            <div className="ads-wrap">
                <div className='button-wrap'>
                    <button id='buttons-ads-left' ><img src={left} alt="" /></button>
                    <button id='buttons-ads-right' ><img src={right} alt="" /></button>
                </div>
                        
                        
                <div className="ads">
                        
                </div>
                <ul className='sitebar'>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                </ul>
            </div>
            <div className="popular-category">
                <h2>Популярные категории</h2>
                <div className='button-wrap'>
                    <button id='buttons-ads-left-2' ><img src={left} alt="" /></button>
                    <button id='buttons-ads-right-2' ><img src={right} alt="" /></button>
                </div>
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
            

        </main>
     );
}
 
export default MainPage;