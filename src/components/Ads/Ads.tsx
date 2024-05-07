import './Ads.css'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

const Ads = () => {
    return ( 
        <div className="ads-wrap">
                <button className='buttons-ads-left' ><img src={left} alt="" /></button>
                <button className='buttons-ads-right' ><img src={right} alt="" /></button>
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
     );
}
 
export default Ads;