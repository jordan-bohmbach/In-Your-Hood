
import './ArticleTile.css'
const ArticleTile = ({article}) => {

    const formatDate = (date) => {
        const Transformededited = new Date(date)

        const split = Transformededited.toString().split(" ")

        const d = [split[0], split[1], split[2], split[3]]

        const formattedDate = d.join(" ")

        const splitTime = split[4].split(":")


        if(splitTime[0] > 12){
            const hour = splitTime[0] % 12
            const formattedTime = [hour, splitTime[1]].join(":") + " PM"
            const res = [formattedDate, formattedTime].join(", ")
            return res


        }


        const formattedTime = [splitTime[0], splitTime[1]].join(":") + " AM"
        const res = [formattedDate, formattedTime].join(", ") // completed
        return res

    }


    return (
        <div className = 'article-tile'>
            {/* <h1>Hello from the Article Tile</h1> */}
            {/* <p>{article.category}</p> */}
            {/* <p>{article.id}</p> */}
            {/* <p>{article.related}</p> */}

            <a className='headline' href={article.url}><h1>{article.headline}</h1></a>

            <p className='date'>{Date(article.datetime)}</p>

            <img className='image' src={article.image} alt="not found"></img>
            <div className='article__summary'>
                <p className='summary_txt'>{article.summary}</p>
            </div>




            {/* {format data and time ^} */}
            <p> Source: {article.source}</p>






        </div>
    )
}

export default ArticleTile
