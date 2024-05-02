import './MainPage.css'
import CategotyMain from '../CategoryMain/CategoryMain'
import Ads from '../Ads/Ads'
import PopularCategory from '../PopularCategory/PopularCategory'
import BestSellers from '../BestSellers/BestSellers'

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