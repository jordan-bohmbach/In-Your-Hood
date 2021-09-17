import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'


import { getPortfolios } from '../../store/portfolio'
import PortfolioStock from './PortfolioStock'

function Charts({portfolioName}) {

    const dispatch = useDispatch()
    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const session = useSelector((state) => state.session)
    // const [count, setCount] = useState(0)
    //const [dataLoaded, setDataLoaded] = useState(false)
    const [dataLoaded, setDataLoaded] = useState(true)
    const [finalDataObject, setFinalDataObject] = useState({})
    const [tickerArray, setTickerArray] = useState([])

    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch, portfolioName])

    let myTickers = new Set()

    const getTickersInPortfolio = (trades) => {
        trades?.forEach(trade => myTickers.add(trade.ticker))
        console.log('mytickers = ', myTickers)
        return Array.from(myTickers)
    }

    
    
    const currentUser = session.user
    // const currentDate = new Date()
    
    const userPortfolio = portfolios.filter((portfolio) =>  portfolio.owner_id === currentUser.id && portfolio.name === portfolioName)[0]
    console.log('userPortfolio = ', userPortfolio)
    useEffect(()=> {
        setTickerArray(Array.from(getTickersInPortfolio(userPortfolio?.trades)))
    },[userPortfolio?.trades])

    const tickerData ={'AAPL': ''}
    // let tickerSet = new Set()

    let count = 0
    const loadTickers = () => {

        if (count < userPortfolio?.trades.length-1) {
            const url = `https://finnhub.io/api/v1/stock/candle?symbol=${userPortfolio.trades[count].ticker}&resolution=D&from=${Math.round((new Date()) / 1000) - (364 * 24 * 60 * 60)}&to=${Math.round(new Date() / 1000)}&token=c4uiisiad3ie1t1fvu90`
            fetch(url)
                .then((res) => res.json())
                .then((res) => tickerData[userPortfolio.trades[count].ticker] = res)
            cleandata()
            cleandata()
            cleandata()
            count++
        } else {
            setDataLoaded(true)
        }

    }

    const cleandata = () => {
        for (let key in tickerData){
            if(tickerData[key].s !== 'ok') {
                const url = `https://finnhub.io/api/v1/stock/candle?symbol=${key}&resolution=D&from=${Math.round((new Date()) / 1000) - (364 * 24 * 60 * 60)}&to=${Math.round(new Date() / 1000)}&token=c4uiisiad3ie1t1fvu90`
                fetch(url)
                    .then((res) => res.json())
                    .then((res) => tickerData[key] = res)
            }
        }
        // console.log('the final data object is ', tickerData)
    }

    // useEffect(()=>{
    //     const interval = setInterval(loadTickers, 200);
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [userPortfolio])


    const portfolioBalanceHistory = {}
    let runningDate = new Date(Date.parse(userPortfolio?.createdat))

    const dateToString = (date) => `${(date.getFullYear())}-${date.getMonth() + 1}-${date.getDate()}`
    const getPreviousDayDate = date => new Date(date.getTime() - (60*24*60000))
    const getNextDayDate = date => new Date(date.getTime()+(60*24*60000))

    let trades

    const balanceScraper = () => {
        trades = userPortfolio?.trades
        portfolioBalanceHistory[dateToString(runningDate)] = userPortfolio?.starting_cash_balance
        // console.log('trades are', trades)
        const today = new Date()
        let pastTradeCount = 0
        while (runningDate < today){
            // console.log('here on day ', runningDate)

            let runningDateBalance = portfolioBalanceHistory[dateToString(runningDate)]
            // console.log('while loop condition here')

            if(trades){
                while(new Date(Date.parse(trades[pastTradeCount]?.transaction_date)) < getPreviousDayDate(runningDate)){ //while the first trade occured prior to the running date
                    if(trades[pastTradeCount].execution_type ==='BUY'){
                        // console.log('execution price is ',trades[pastTradeCount].execution_price)
                        // console.log('execution quantity is', trades[pastTradeCount].quantity)
                        runningDateBalance -= parseFloat(trades[pastTradeCount].execution_price) * parseInt(trades[pastTradeCount].quantity)
                        // console.log('executed a buy of ', trades[pastTradeCount])
                    } else {
                        runningDateBalance += parseFloat(trades[pastTradeCount].execution_price) * parseInt(trades[pastTradeCount].quantity)
                        // console.log('executed a sell of ', trades[pastTradeCount])
                    }
                    pastTradeCount++
                }
            }

            portfolioBalanceHistory[dateToString(getNextDayDate(runningDate))]=runningDateBalance
            runningDate = getNextDayDate(runningDate)
        }
        // console.log('final portfolioBalanceHistory is ', portfolioBalanceHistory)
        setFinalDataObject(portfolioBalanceHistory)
    }


    useEffect(()=>{
        balanceScraper()
    }, [dataLoaded, portfolioName])




    // console.log('portfolioBalanceHistory = ', portfolioBalanceHistory)



    return (

        <>
            <div className='chart-area'>
                {finalDataObject && <LineChart data={finalDataObject} />}

            </div>
            <div className='dashboard-stock-section'>
                <div className='stock-list-header'>{portfolioName}</div>
                <div className='stock-list-header'>Stocks</div>
                <div className='stock-list'>
                    {tickerArray.map(ticker=> (
                        <PortfolioStock ticker={ticker} />
                    ))}
                </div>
            </div>
        </>


    )
}

export default Charts;
