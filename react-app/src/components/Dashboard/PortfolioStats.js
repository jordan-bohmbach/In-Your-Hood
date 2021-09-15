import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolios } from '../../store/portfolio'
import Charts from './Chart.js'

function PortfolioStats(){
    const dispatch = useDispatch()

    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const session = useSelector((state) => state.session)
    
    const currUsr = session.user
    const usrPorts = portfolios.filter((port) =>  port.owner_id == currUsr.id)
   
    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])
    
    
    
    return (
        <>
            {usrPorts.map((port) => (
            <div className='stats__header'>
                {/* <select><option value={port.name}><h1>{port.name}</h1></option></select> */}
                <h1>{port.name}</h1>
                
            </div>
            ))}


            <div className='port__chart'>
                <Charts/>

            </div>

                {usrPorts.map((port) => (
            <div className='tradeHistory__link'>        
                    <h2 className='stats__balance'>$ {port.balance}</h2>
                    
                    <a className='th__link' href={`/${port.name}/trade-history`}>Trade History</a>
                    
            </div>    
                ))}
                
            
        </>    
        
    )
}

export default PortfolioStats; 
