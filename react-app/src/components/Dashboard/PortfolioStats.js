import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolios } from '../../store/portfolio'

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
                <h2 className='stats__balance'>$ {port.balance}</h2>
            </div>
            ))}
            
        </>
    )
}

export default PortfolioStats; 
