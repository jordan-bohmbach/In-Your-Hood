import './AssetDetails.css'
import StockChart from './StockChart.js';
import Header from '../Header';
import Footer from '../Footer';
import Watchlist from '../Watchlist'
import IndividualStockNews from './IndividualStockNews'


function AssetDetails(){

    return(
        <div>
            < Header />
            < StockChart />
            < Watchlist /> 

           <div className='stock__information'>
                <div className='stock__details'>

                </div>
                <div className='stock__news'>
                    <IndividualStockNews /> 
                </div>
           </div>

           <Footer />

        </div>

        
    )
}

export default AssetDetails;
