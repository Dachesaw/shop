import './MainPage.css'
import CategotyMain from '../CategoryMain/CategoryMain'
import Ads from '../Ads/Ads'
import PopularCategory from '../PopularCategory/PopularCategory'
import BestSellers from '../BestSellers/BestSellers'

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
            <CategotyMain/>
            <Ads/>
            <PopularCategory/>
            <BestSellers />
        </main>
     );
}
 
export default MainPage;