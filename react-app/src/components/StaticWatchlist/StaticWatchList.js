import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import { getWatchlists, createOneWatchlist, updateWatchlist, deleteWatchlist } from '../../store/watchlist';

import './StaticWatchList.css'

function StaticWatchlist() {
    const dispatch = useDispatch()
    const watchlists = useSelector((state) => Object.values(state.watchlists))
    // const session = useSelector((state) => state.session)
    const [watchlistName, setWatchlistName] = useState('TechWatch')
    console.log('watchlists = ',watchlists)
    console.log('watchlistName = ',watchlistName)
    const myWatchList = watchlists.filter(watchlist=> watchlist.name === watchlistName)
    console.log('myWatchlist = ', myWatchList)
    useEffect(() => {
        dispatch(getWatchlists());
    }, [dispatch]);

    const handleDelete = () => {
        dispatch(deleteWatchlist(Number(watchlists.id)))
    }



    return (
        <div className='watchlist-container'>

            <h2>Watchlist</h2>

            <div className='watchlist-selector'>

                <form >
                    <select className='watchlist-toggle' onChange={((e) => setWatchlistName(e.target.value))}>
                        {watchlists.map((port) => (
                            <option value={port.name} key={port.id} >{port.name}</option>
                        ))}
                    </select>
                </form>
            </div>



            {myWatchList[0]?.stocks?.map((stock) => (
                
                <div>
                    <a className='stock__link' href={`/stock/${stock}`}><p>{stock}</p></a>
                    <div className='buttons'>
                        <button className='buttons' ><img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" /></button>
                        <button className='buttons' className="deleteWatchlist" onClick={() => handleDelete(watchlists?.id)}><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" /></button>
                    </div>
                </div>
            ))}







        </div>


    )
}

export default StaticWatchlist