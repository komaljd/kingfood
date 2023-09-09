import { Link } from "react-router-dom";

const BrandList = ({brandsdata, brands,menuid}) =>{
    return(
        <>
          <div className="col-md-2">
            <Link to={""+menuid} key={menuid}>
            <div className="brand-icon">
              <div>
                  <img src={brandsdata.image} alt={brandsdata.imagealt} className="imgSize"/>  
              </div>
            </div>
            </Link>
          </div>
        </>
    )
}

export default BrandList;























// const BrandList = ({brandsdata, brands}) =>{
//     return(
//         <>
//           <div className="col-md-2">
//             <div className="brand-icon"><div>
//               <img src={brandsdata.image} alt={brandsdata.imagealt} className="imgSize"/>  
//             </div></div>
//           </div>
//         </>
//     )
// }

// export default BrandList;