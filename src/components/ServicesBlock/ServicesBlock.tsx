import './ServicesBlock.css'
import Card from '../Card/Card'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

import Items from "../../data/items.json";

const ServicesBlock = () => {
    return ( 
        <div className='best-sellers-wrap'>
            <div className="best-sellers-header">
                <h2>Сервисы</h2>
                <ul>
                    <li><button>Все</button></li>
                    <li><button>Для компьютеров</button></li>
                    <li><button>Для телевизоров</button></li>
                    <li><button>Для смартфонов/планшетов</button></li>
                    <li><button>Установка техники</button></li>
                </ul>
            </div>
                        <button className='buttons-ads-left' ><img src={left} alt="" /></button>
                        <button className='buttons-ads-right' ><img src={right} alt="" /></button>
            <div className='card-block'>
                <Card {...Items[8]}/>    
                <Card {...Items[9]}/> 
                <Card {...Items[10]}/> 
                <Card {...Items[11]}/>
            </div>         
        </div>
    );
}
             
export default ServicesBlock;