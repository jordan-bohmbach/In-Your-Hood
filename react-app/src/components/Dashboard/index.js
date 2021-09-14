import './Dashboard.css'

import NewsFeed from '../NewsFeed'
import Header from '../Header'
import Watchlist from '../Watchlist'
// import Chart from '../Portfolio/Chart'
// import PortfolioStats from '../Portfolio/Chart'
import PortfolioStats from './PortfolioStats.js'

function Dashboard(){

    return(
        

        <div >
            <Header /> 

            <div className='dash__portfilioStats'>
                <PortfolioStats />
                
            </div>

            <Watchlist /> 

            <h1 className='news-feed__label'> News Feed </h1>
            <div className='dash__newsFeed'>
                <NewsFeed /> 
            </div>
            
            <div className='jump-to-top'>
                
                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-up-arrow-alignment-and-tools-kiranshastry-solid-kiranshastry.png"/>

            </div>
        </div>
    )
}


export default Dashboard
