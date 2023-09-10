import macd from '../images/brands/macd.jpg';
import natural from '../images/brands/natural.jpg';
import lapinopizza from '../images/brands/lapinopizza.jpg';
import kwality_walls from '../images/brands/kwality_walls.jpg'
import kfc from '../images/brands/kfc.jpg';
import pizza_hut from '../images/brands/pizza-hut.jpg';


const hotels= [
    {
        id:1,
        hotelname:'macD',
        image:macd,
        imagealt:'macd',
        isBrand:true,  
        locationId:'1',      
    },
    {
        id:2,
        hotelname:'Natural',
        image:natural,
        imagealt:'natural',        
        isBrand:true, 
        locationId:'1'  
    },
    {
        id:3,
        hotelname:'La Pino Pizzza',
        image:lapinopizza,
        imagealt:'la-pino-pizza',
        isBrand:true, 
        locationId:'1'  
       
    },
    {
        id:4,
        hotelname:'Kwality Walls',
        image:kwality_walls,
        imagealt:'kwality_walls',
        isBrand:true,  
        locationId:'2'
    },
    {
        id:5,
        hotelname:'KFC',
        image:kfc,
        imagealt:'kfc',
        isBrand:true,
        locationId:'2'
    },
    {
        id:6,
        hotelname:'Pizza Hut',
        image:pizza_hut,
        imagealt:'pizza-hut',
        isBrand:true,
        locationId:'2'
    },
    {
        id:7,
        hotelname:'Shabri',
        image:pizza_hut,
        imagealt:'Shabri',
        isBrand:false,
        locationId:'2'
    }
];

export default hotels;
