import './Dashboard.css'

import NewsFeed from '../NewsFeed'
import Header from '../Header'
import Watchlist from '../Watchlist'
import PortfolioStats from './PortfolioStats.js'
import NewTradeForm from '../NewTradeForm/NewTradeForm'
import SearchBar from '../Header/SearchBar'
import CreatePortfolioForm from './CreatePortfolioForm'

function Dashboard(){

    return(


        <div >
            {/* <Header /> */}
            <SearchBar />
            <div className='sticky__items'>
                <NewTradeForm />
                <Watchlist /> 
                
            </div>
            <div className='dash__portfilioStats'>
                <PortfolioStats />
                <CreatePortfolioForm />
            </div>

            

            <div className='dash__newsFeed'>
                <NewsFeed />
            </div>

            <div className='jump-to-top'>

                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-up-arrow-alignment-and-tools-kiranshastry-solid-kiranshastry.png" alt="NewsFeedImage"/>

            </div>
        </div>
    )
}


export default Dashboard
