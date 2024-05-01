import './Ads.css'
import left from '../../assets/left-ads-button.svg'
import right from '../../assets/right-ads-button.svg'

const Ads = () => {
    return ( 
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
     );
}
 
export default Ads;