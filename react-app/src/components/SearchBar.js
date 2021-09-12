import { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const finnhub = require('finnhub');

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if(searchVal) searchStocks(searchVal)
    }, [searchVal])

    const searchStocks = (ticker) => {
        const url = `https://finnhub.io/api/v1/search?q=${ticker}&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res)=> res.result.map(stock => stock.description + " : " + stock.displaySymbol))
            .then((res)=>setSearchResults(res))
    }

    return (
        <>
            <h1>Hello from the Search Bar</h1>
            <input
                onChange={e => setSearchVal(e.target.value)}
                value={searchVal}
                placeholder="Search..."
                />
                <ul>
                    {searchResults.map((result) => (
                        <li>{result}</li>
                    ))}
                </ul>
        </>
    )
}

export default SearchBar