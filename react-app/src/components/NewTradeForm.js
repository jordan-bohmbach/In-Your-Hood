import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createOneTrade} from '../store/portfolio'

function NewTradeForm(){

    const dispatch = useDispatch();
    const history = useHistory();

    // const sessionUser = useSelector(state => state.session.user);
    const [portfolioId, setPortfolioId] = useState('');
    const [ticker, setTicker] = useState('')
    const [executionPrice, setExecutionPrice] = useState('')
    const [executionType, setExecutionType] = useState('')
    const [quantity, setQuantity] = useState('')

    // const updatePortfolioId = (e) => setPortfolioId(e.target.value);
    const updateTicker = (e) => setTicker(e.target.value);
    const updateExecutionPrice = (e) => setExecutionPrice(e.target.value);
    const updateExecutionType = (e) => setExecutionType(e.target.value);
    const updateQuantity = (e) => setQuantity(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            portfolioId,
            ticker,
            executionPrice,
            executionType,
            quantity,
        }

    const trade = await dispatch(createOneTrade(payload))
        if(trade){
            history.push(`/dashboard`)
        }
    }
    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>Portfolio</label>
                <select value={portfolioId}></select>
                <label>Ticker</label>
                <input value={ticker} onChange={updateTicker}></input>

                <label>Execution Price</label>
                <input value={executionPrice} onChange={updateExecutionPrice}></input>

                <label>Execution Type</label>
                <input value={executionType} onChange={updateExecutionType}></input>

                <label>Quantity</label>
                <input value={quantity} onChange={updateQuantity}></input>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default NewTradeForm;