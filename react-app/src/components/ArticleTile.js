const ArticleTile = ({article}) => {
    return (
        <div className = 'article-tile'>
            <h1>Hello from the Article Tile</h1>
            <p>{article.category}</p>
            <p>{article.datetime}</p>
            <p>{article.headline}</p>
            <p>{article.id}</p>
            <img src={article.image} alt="not found"></img>
            <p>{article.related}</p>
            <p>{article.source}</p>
            <p>{article.summary}</p>
            <a href={article.url}>{article.url}</a>
        </div>
    )
}

export default ArticleTile