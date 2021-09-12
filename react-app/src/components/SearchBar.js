import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
            .then((res)=> res.result
            .filter(stock => stock.displaySymbol.split('.').length === 1) //this will filter out results not on american exchanges
            .filter(stock => stock.displaySymbol.split('/').length === 1) //filters stocks with symbols such as GOOG/USD which will mess up the resource path
            .map(stock => stock.description + " :" + stock.displaySymbol))
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
                        <li>
                            <Link to={`/stock/${result.split(":")[1].split('.')[0]}`}>
                                {result} = {result.split(":")[1].split('.')[0]}
                            </Link>
                        </li>
                    ))}
                </ul>
        </>
    )
}

export default SearchBar