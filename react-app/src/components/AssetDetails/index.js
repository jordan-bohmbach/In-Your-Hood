import './AssetDetails.css'
import StockChart from './StockChart.js';
import Header from '../Header';
import Footer from '../Footer';
import Watchlist from '../Watchlist'
import IndividualStockNews from './IndividualStockNews'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NewTradeForm from '../NewTradeForm/NewTradeForm';


function AssetDetails(){
    const { ticker } = useParams()
    const [executionPrice, setExecutionPrice] = useState('')
    const [companyProfile, setCompanyProfile] = useState(null)
    const [basicFinancials, setBasicFiancials] = useState(null)
    const [companyOverview, setCompanyOverview] = useState(null)

    useEffect(() => {
        if(companyProfile?.ticker !== ticker) getTickerCompanyProfile(ticker)
        if(basicFinancials?.ticker !== ticker) getTickerBasicFianacials(ticker)
        updateExecutionPrice(ticker)

        if(companyOverview?.symbol !== ticker) getCompanyOverview(ticker)

    }, [ticker])

    const updateExecutionPrice = (ticker) => {
        const url = `https://finnhub.io/api/v1//quote?symbol=${ticker}&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setExecutionPrice(res.c))
    }

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

    const getCompanyOverview = (ticker) => {
        const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=1X50D4IAC99C7FNS`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setCompanyOverview(res))
    }

    return(
        <div>
            < Header />
            < StockChart />
            {/* < Watchlist />  */}
            <NewTradeForm ticker={ticker}/>

           <div className='stock__information'>
                <div className='stock__details'>
                    <h1>About</h1>
                    {console.log('company Overview = ', companyOverview)}
                    <h2>{companyOverview?.Description}</h2>
                    <h1>Company Profile</h1>
                    <h2>Country : {companyProfile?.country}</h2>
                    <h2>Exchange : {companyProfile?.exchange}</h2>
                    <h2>IPO Date : {companyProfile?.ipo}</h2>
                    {console.log('companyProfile = ', companyProfile)}
                    <h1>Company Financials</h1>
                    <div className='financial-details'>
                        <div className='left-financials'>
                            <h2>Price Per Share : ${executionPrice}</h2>
                            <h2>Market Cap : {companyProfile?.marketCapitalization}</h2>
                            <h2>Shares Outstanding : {companyProfile?.shareOutstanding}</h2>
                            <h2>PE Ratio : {companyOverview?.PERatio}</h2>
                        </div>
                        <div className='right-financials'>
                            {/* {console.log('basicFiancials.metric.52WeekHigh = ',basicFinancials?.metric['52WeekHigh'])} */}
                            {basicFinancials? <h2>52 Week High : ${basicFinancials?.metric['52WeekHigh']}</h2> : ''}
                            {basicFinancials? <h2>52 Week Low : ${basicFinancials?.metric['52WeekLow']}</h2> : ''}
                            {basicFinancials ? <h2>Annual Dividend per Share: {basicFinancials?.metric['dividendPerShareAnnual']}</h2> : ''}
                            <h2>Earnings Per Share : {companyOverview?.EPS}</h2>
                        </div>
                    </div>
                    {console.log('basicFinancials = ', basicFinancials)}
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
