import './Dashboard.css'

import NewsFeed from '../NewsFeed'
import Header from '../Header'


function Dashboard(){

    return(
        

        <div >
            <Header /> 

            <div className='dash__portfilioStats'>
                <h1>portfolio stats</h1>
                
            </div>

            <div className='dash__watchlist-container'>
                <h1> Watchlist </h1>
            </div>

            <div className='dash__newsFeed'>
                <NewsFeed /> 
            </div>
            
        </div>
    )
}


export default Dashboard
