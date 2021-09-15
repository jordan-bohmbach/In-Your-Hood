import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import PortfolioStats from '../Dashboard/PortfolioStats'


function PortfolioStatsChart({trades}){

    // console.log(`chart:`, trades)

    const info = trades?.map((trade) => Array(trade.ticker, trade.quantity))
    const values = trades?.map((trade) => [trade.ticker, trade.quantity, trade.execution_price])
    console.log(`vals`, values)

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

    console.log(`final`, calculateDollarAmount(values))
    // console.log(`take1:`, info)

    

    return(
        <PieChart data={calculateDollarAmount(values)} />
    )
}

export default PortfolioStatsChart
