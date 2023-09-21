import Banner from '../banner/Banner';
import Brands from '../brand/Brands';
import BestSeller from '../bestseller/BestSeller';
import Contact from '../contactus/Contact';
import MenuCategory from '../menucategories/MenuCategory';

const Home = () =>{
    return(
      <div>
         <Banner/>
          <Brands/>
          <MenuCategory/>
          <BestSeller/>
          <Contact/>     
  
      </div>

    )
}

export default Home;