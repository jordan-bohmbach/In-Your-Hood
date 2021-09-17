import './Dashboard.css'

import NewsFeed from '../NewsFeed'
import Header from '../Header'
import Watchlist from '../Watchlist'
import StaticWatchlist from '../StaticWatchlist/StaticWatchList'
import PortfolioStats from './PortfolioStats.js'
import SearchBar from '../Header/SearchBar'
import CreatePortfolioForm from './CreatePortfolioForm'
import CreateWatchlistForm from './CreateWatchlistForm'

function Dashboard(){

    return(




        

        <div >
            <div className='sticky__items'>
                <StaticWatchlist />
            </div>

            <div className='dash__portfilioStats'>
                <PortfolioStats />
            </div>

            <div className='dash__forms-container'>
                <CreatePortfolioForm />
                <CreateWatchlistForm />
            </div>

            <div className='dash__newsFeed'>
                <NewsFeed />
            </div>
        </div>
    )
}


export default Dashboard
