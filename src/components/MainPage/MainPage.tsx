import './MainPage.css'
import CategotyMain from '../CategoryMain/CategoryMain'
import Ads from '../Ads/Ads'
import PopularCategory from '../PopularCategory/PopularCategory'
import BestSellers from '../BestSellers/BestSellers'
import SeasonalProducts from '../SeasonalProducts/SeasonalProducts'

const MainPage = () => {
    return ( 
        <main>
            <CategotyMain/>
            <Ads/>
            <PopularCategory/>
            <BestSellers />
            <SeasonalProducts />
        </main>
     );
}
 
export default MainPage;