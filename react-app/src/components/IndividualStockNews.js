import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ArticleTile from "./NewsFeed/ArticleTile"

const IndividualStockNews = () => {
    const { ticker } = useParams()

    const [stockNews, setStockNews] = useState([])

    useEffect(() => {
        getTickerNews(ticker)
    }, [ticker])

    const getTickerNews = (ticker) => {
        const url = `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=2021-03-01&to=2021-03-09&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setStockNews(res))
    }

    return(
        <>
            <h1>Hello from the Stock News Tile App</h1>
            {console.log('stockNews = ', stockNews)}
            {stockNews.map(article => (
                <ArticleTile article={article} key={article.id} />
            ))}
        </>
    )
}

export default IndividualStockNews