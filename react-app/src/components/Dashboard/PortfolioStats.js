import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPortfolios } from '../../store/portfolio'
import Charts from './Chart.js'
import './Dashboard.css'

function PortfolioStats(){
    const dispatch = useDispatch()

    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const session = useSelector((state) => state.session)
    
    const currUsr = session.user
    const usrPorts = portfolios.filter((port) =>  port.owner_id === currUsr.id)
    
    const getDefaultPort = usrPorts.filter((port) => port.id === 1)
    const defaultPort = getDefaultPort[0]

    console.log(defaultPort)
    
    const [ portDisplay, setPortDisplay ] = useState(defaultPort?.name)


    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])

    useEffect(() => {
        setPortDisplay(defaultPort?.name)
    }, [defaultPort?.name])

    const changeState = (name) => {
        console.log(`name`, name)
        console.log(`triggered`)
        
        setPortDisplay(name)
        // console.log('Newstate:', portDisplay)
    }
    
  


    //  let currVal = '';
    
    
    return (
        <>
            
            <div className='stats__header'>
                
             <form >
                <select className='port__toggle' onChange={((e) => changeState(e.target.value))}>
                    {usrPorts.map((port) => (
                         <option value={port.name} key={port.id} >{port.name}</option>
                    ))}
                   {console.log('state:', portDisplay)}
                   
                
                </select>
              </form>  
            </div>
            


            <div className='port__chart'>
                {console.log('portDisplay = ', portDisplay)}
                <Charts portfolioName={portDisplay}/>
                <button>Delete Portfolio</button>
            </div>

                {/* {usrPorts.map((port) => (
            <div className='tradeHistory__link'>        
                    <h2 className='stats__balance'>$ {port.balance}</h2>
                    
                    <a className='th__link' href={`/${port.name}/trade-history`}>Trade History</a>
                    
            </div>    
                ))} */}
                
            
        </>    
        
    )
}

export default PortfolioStats; 
