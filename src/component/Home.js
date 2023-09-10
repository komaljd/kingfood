import Banner from '../banner/Banner';
import Brands from '../brand/Brands';
import BestSeller from '../bestseller/BestSeller';
import Contact from '../contactus/Contact';
import Footer from '../footer/Footer';
import MenuCategory from '../brand/MenuCategory';

const Home = () =>{
    return(
      <div className='container'>
          <Banner/>
          <Brands/>
          <MenuCategory/>
          <BestSeller/>
          <Contact/>
          <Footer/>
      </div>

    )
}

export default Home;