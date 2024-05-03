import './SeasonalProducts.css'
import Card2 from '../Card2/Card2'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

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
                <Card2 />    
                <Card2 /> 
                <Card2 /> 
                <Card2 />
            </div>         
        </div>
    );
}
             
export default SeasonalProducts;