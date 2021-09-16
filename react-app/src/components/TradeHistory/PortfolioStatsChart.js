import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import PortfolioStats from '../Dashboard/PortfolioStats'


function PortfolioStatsChart({trades}){

    const values = trades?.map((trade) => [trade.ticker, trade.quantity, trade.execution_price])

    const calculateDollarAmount = (values) => {
        let res = []
        for(let i = 0; i < values?.length; i++){
            let x = values[i]
            const [ ticker, quantity, price] = x 
            const dollarAmount = quantity * price 
            res.push(Array(ticker, dollarAmount))
        }
        return res
    }

   

    return(
        <PieChart data={calculateDollarAmount(values)} />
    )
}

export default PortfolioStatsChart
