const PortfolioStock = ({ticker}) => {
    return (
        <div className='portfolio-stock'>
            <div className='portfolio-stock-ticker'>{ticker}</div>
            <button>Trade</button>
        </div>
    )
}

export default PortfolioStock