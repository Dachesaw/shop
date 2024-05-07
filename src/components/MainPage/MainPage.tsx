import "./MainPage.css";
import CategotyMain from "../CategoryMain/CategoryMain";
import Ads from "../Ads/Ads";
import PopularCategory from "../PopularCategory/PopularCategory";
import BestSellers from "../BestSellers/BestSellers";
import SeasonalProducts from "../SeasonalProducts/SeasonalProducts";
import ServicesBlock from "../ServicesBlock/ServicesBlock";

const MainPage = () => {
    return (
        <main>
            <CategotyMain />
            <Ads />
            <PopularCategory />
            <BestSellers />
            <SeasonalProducts />
            <ServicesBlock />
        </main>
    );
};

export default MainPage;
