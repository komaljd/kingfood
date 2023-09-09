import Banner from '../banner/Banner';
import Brands from '../brand/Brands';
import MenuCategories from '../menucategories/MenuCategories';
import BestSeller from '../bestseller/BestSeller';
import Contact from '../contactus/Contact';
import Footer from '../footer/Footer';

const Home = () =>{
    return(
      <div className='container'>
          <Banner/>
          <Brands/>
          <MenuCategories/>
          <BestSeller/>
          <Contact/>
          <Footer/>
      </div>

    )
}

export default Home;