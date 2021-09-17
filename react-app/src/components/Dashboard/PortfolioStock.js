import { Link } from "react-router-dom"

const PortfolioStock = ({ticker}) => {
    return (
        <div className='portfolio-stock'>
            <div className='portfolio-stock-ticker'>{ticker}</div>
                <Link to={`/stock/${ticker}`}><button>Trade</button></Link>
        </div>
    )
}

export default PortfolioStock