import './AssetDetails.css'
import StockChart from './StockChart.js';
import Header from '../Header';
import Footer from '../Footer';
import Watchlist from '../Watchlist'
import IndividualStockNews from './IndividualStockNews'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


function AssetDetails(){
    const { ticker } = useParams()

    const [companyProfile, setCompanyProfile] = useState([])
    const [basicFinancials, setBasicFiancials] = useState([])

    useEffect(() => {
        getTickerCompanyProfile(ticker)
        getTickerBasicFianacials(ticker)
    }, [ticker])

    const getTickerCompanyProfile = (ticker) => {
        const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setCompanyProfile(res))
    }

    const getTickerBasicFianacials = (ticker) => {
        const url = `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setBasicFiancials(res))
    }

    return(
        <div>
            < Header />
            < StockChart />
            < Watchlist /> 

           <div className='stock__information'>
                <div className='stock__details'>
                    <h1>Hello from the stock details</h1>
                    {console.log(companyProfile)}
                    {console.log(basicFinancials)}
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
