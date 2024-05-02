import './BestSellers.css'
import Card from '../Card/Card';
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

import Items from '../../data/items.json'



const BestSellers = () => {
    return (
        <div className='best-sellers-wrap'>
            <div className="best-sellers-header">
                <h2>Хиты продаж</h2>
                <ul>
                    <li><button>Все</button></li>
                    <li><button>Смартфоны</button></li>
                    <li><button>Стиральные машины</button></li>
                    <li><button>Пылесосы</button></li>
                    <li><button>Холодильники</button></li>
                    <li><button>Телевизоры</button></li>
                    <li><button>Микроволновые печи</button></li>
                </ul>
            </div>
            <button className='buttons-ads-left' ><img src={left} alt="" /></button>
            <button className='buttons-ads-right' ><img src={right} alt="" /></button>
            <div className='card-block'>
                <Card {...Items[0]} />
                <Card {...Items[1]} />
                <Card {...Items[2]} />
                <Card {...Items[1]} />
            </div>
        </div>
    );
}

export default BestSellers;