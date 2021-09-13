import './AssetDetails.css'
import StockChart from './StockChart.js';
import Header from '../Header';
import Footer from '../Footer';
import Watchlist from '../Watchlist'


function AssetDetails(){

    return(
        <div>
            < Header />
            < StockChart />
            < Watchlist /> 

           <div className='stock__information'>

           </div>

           <Footer />

        </div>

        
    )
}

export default AssetDetails;
