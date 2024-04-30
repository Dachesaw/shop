import './MainPage.css'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

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
            

        </main>
     );
}
 
export default MainPage;