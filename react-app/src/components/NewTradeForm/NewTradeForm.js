import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createOneTrade} from '../../store/portfolio'

import './NewTradeForm.css'

function NewTradeForm({ticker}){

    const dispatch = useDispatch();
    const history = useHistory();

    
    const sessionUser = useSelector(state => state.session.user);
    const allPortfolios = useSelector(state => state.portfolios)
    const myPortfolios = []

    const [portfolioId, setPortfolioId] = useState(1);

    for (let key in allPortfolios) {
        if(allPortfolios[key].owner_id === sessionUser.id){
            myPortfolios.push(allPortfolios[key])
        }
    }

    const [executionPrice, setExecutionPrice] = useState('')
    const [executionType, setExecutionType] = useState('BUY')
    const [quantity, setQuantity] = useState('')

    const updatePortfolioId = (e) => setPortfolioId(e.target.value);
    const updateExecutionType = (e) => setExecutionType(e.target.value);
    const updateQuantity = (e) => setQuantity(e.target.value);
    
    const updateExecutionPrice = () => {
        const url = `https://finnhub.io/api/v1//quote?symbol=${ticker}&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setExecutionPrice(res.c))
    }

    useEffect(()=> {
        updateExecutionPrice()
    }, [ticker])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!portfolioId) setPortfolioId(myPortfolios[0]?.id)

        const payload = {
            portfolio_id : portfolioId,
            ticker,
            execution_price : executionPrice,
            execution_type : executionType,
            quantity,
            transaction_date : new Date()
        }

    const trade = await dispatch(createOneTrade(payload))
        if(trade){
            history.push(`/dashboard`)
        }
    }
    return(
        <div className="new-trade-form-container">
            <h2>Trade {ticker} Stock</h2>
            {console.log('portfolios = ', myPortfolios)}
            <form onSubmit={handleSubmit} className='new-trade-form'>
                <label>Portfolio
                    <select 
                    value={portfolioId}
                    onChange={updatePortfolioId}
                    >
                        {myPortfolios.map(portfolio=>(
                            <option key={portfolio.id} value={portfolio.id}>
                            {portfolio.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>{`Execution Price: $${executionPrice} per share`}</label>

                <label>Execution Type
                    <select
                    value={executionType}
                    onChange={setExecutionType}
                    >
                        <option key={"BUY"}>BUY</option>
                        <option key={"SELL"}>SELL</option>
                    </select>
                </label>

                <label>Quantity
                    <input value={quantity} type='number' onChange={updateQuantity}></input>
                </label>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default NewTradeForm;