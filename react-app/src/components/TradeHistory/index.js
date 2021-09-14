import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolios } from '../../store/portfolio'
import { useParams } from 'react-router'

import './TradeHistory.css'
import Header from '../Header'
import Footer from '../Footer'



function TradeHistory(){
    const { portfolio } = useParams()
    const dispatch = useDispatch()
    

    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const session = useSelector((state) => state.session)
    
    const currUsr = session.user
    const usrPorts = portfolios.filter((port) =>  port.owner_id == currUsr.id)
    
    const currentPort = usrPorts.filter((port) => port.name ===portfolio )
   
    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])

    const trades = currentPort[0].trades

    
    console.log(`trades:`, trades)

    

    return(
        <>
            <Header />

            <div className='port__title'>
                {currentPort.map((port) => (
                    <h1>{port.name}</h1>
                ))}
                
            </div>

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

            </div>
            <Footer />
        </>

    )
}

export default TradeHistory
