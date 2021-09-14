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
    console.log(`name`, portfolio)

    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const session = useSelector((state) => state.session)
    
    const currUsr = session.user
    const usrPorts = portfolios.filter((port) =>  port.owner_id == currUsr.id)
    
    const currentPort = usrPorts.filter((port) => port.name ===portfolio )
   
    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])

    console.log(`history:`, currentPort)

    // const currPort = 

    return(
        <>
            <Header />

            <div className='port__title'>
                {usrPorts.map((port) => (
                    <h1>{port.name}</h1>
                ))}
                
            </div>

            <div className='port__holdings-chart'>
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
