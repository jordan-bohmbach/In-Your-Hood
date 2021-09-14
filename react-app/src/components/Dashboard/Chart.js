import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'

import { getPortfolios } from '../../store/portfolio'
 
function Charts() {
  
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

        <div>
            <LineChart data={{"2021-05-12":0,"2021-05-12":500,"2021-05-13": 5000, "2021-05-14": 5200}} />
        </div>
        </>
        
    )
}

export default Charts;
