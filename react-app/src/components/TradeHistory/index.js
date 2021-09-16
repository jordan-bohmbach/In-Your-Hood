import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolios } from '../../store/portfolio'
import { useParams } from 'react-router'

import './TradeHistory.css'
import Header from '../Header'
import Footer from '../Footer'
import PortfolioStatsChart from './PortfolioStatsChart'
// import PortfolioStats from '../Dashboard/PortfolioStats'


function TradeHistory(){
    const { portfolio } = useParams()
    const dispatch = useDispatch()


    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const session = useSelector((state) => state.session)

    const currUsr = session.user
    const usrPorts = portfolios.filter((port) =>  port.owner_id === currUsr.id)

    const currentPort = usrPorts.filter((port) => port.name === portfolio )

    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])

    const trades = currentPort[0]?.trades


    console.log(`trades:`, trades)



    return(
        <>
             <Header />
            <div className='port__title'>
                {currentPort.map((port) => (
                    <h1>{port.name}</h1>
                ))}

            </div>

            <div className='th__port-state'>
                <PortfolioStatsChart trades={trades} />

            </div>
             <div className='th__container-label'>
                    <h2 className='container__label-date'>Date</h2>
                    <h2 className='container__label-ticker'>Ticker</h2>
                    <h2 className='container__label-price'>Execution Price</h2>
                    <h2 className='container__label-action'>Action</h2>
                    <h2 className='container__label-quantity'>Quantity</h2>
             </div>

             <div className='trade__history-container'>
                 {trades?.map((trade) => (
                     <div className='th__data-row'>
                        <p className='data__row-date'>{trade.transaction_date}</p>
                        <p className='data__row-ticker'>{trade.ticker}</p>
                        <p className='data__row-price'>{trade.execution_price}</p>
                        <p className='data__row-type'>{trade.execution_type}</p>
                        <p className='data__row-quantity'>{trade.quantity}</p>
                     </div>
                 ))}

             </div>


{/*
            <div className='port__holdings-chart'>
                <tr className='table__row'>
                    <td className='table__cell'>Date</td>
                    <td className='table__cell'>Ticker</td>
                    <td className='table__cell'>Execution Price</td>
                    <td className='table__cell'>Action</td>
                    <td className='table__cell'>Quantity</td>



                </tr>
                {trades.map((trade) => (

                    <div className='port__holdings-row'>
                        <tr>
                            <td>{trade.transaction_date}</td>
                            <td>{trade.ticker}</td>
                            <td>{trade.execution_price}</td>
                            <td>{trade.execution_type}</td>
                            <td>{trade.quantity}</td>
                        </tr>
                    </div>
                ))}
                <ul>

                </ul>

            </div>

            <div className='port__holdings-list'>

            </div>*/}
            <Footer />
        </>

    )
}

export default TradeHistory
