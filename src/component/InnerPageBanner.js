import './innerpagebanner.css';

const InnerPageBanner = ({bannername}) =>{
    return(
        <div className="bgImg brandDetailSection">
            <h1 className="text-center">{bannername}</h1>
        </div>
    );
}

export default InnerPageBanner;