import { useParams } from "react-router"
import TradingViewWidget from 'react-tradingview-widget'

const StockChart = () => {

    const { ticker } = useParams()
    return(
        <>
            <h1>Hello from the stock chart for ticker :{ticker}</h1>

            <TradingViewWidget symbol={ticker}></TradingViewWidget>
        </>
    )
}

export default StockChart