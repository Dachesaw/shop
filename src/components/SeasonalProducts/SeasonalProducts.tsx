import './SeasonalProducts.css'
import Card from '../Card/Card'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

import Items from "../../data/items.json";

const SeasonalProducts = () => {
    return ( 
        <div className='best-sellers-wrap'>
            <div className="best-sellers-header">
                <h2>Сезонные товары</h2>
                <ul>
                    <li><button>Все</button></li>
                    <li><button>Культиваторы</button></li>
                    <li><button>Инструменты Садовые</button></li>
                    <li><button>Кусторезы, садовые ножницы</button></li>
                    <li><button>Стеклоочистители</button></li>
                    <li><button>Мойки</button></li>
                </ul>
            </div>
                        <button className='buttons-ads-left' ><img src={left} alt="" /></button>
                        <button className='buttons-ads-right' ><img src={right} alt="" /></button>
            <div className='card-block'>
                <Card {...Items[4]}/>    
                <Card {...Items[5]}/> 
                <Card {...Items[6]}/> 
                <Card {...Items[7]}/>
            </div>         
        </div>
    );
}
             
export default SeasonalProducts;