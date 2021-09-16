import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import { getWatchlists, createOneWatchlist, updateWatchlist, deleteWatchlist } from '../../store/watchlist';

import './Watchlist.css'

function Watchlist(){
    const dispatch = useDispatch()
    const watchlists = useSelector((state) => Object.values(state.watchlists))
    const session = useSelector((state) => state.session)

    useEffect(() => {
        dispatch(getWatchlists());
    }, [dispatch]);

    return (
        <div className='dash__watchlist-container'>
            {watchlists.map((list) =>(
                <>
                <h1>{list.name}</h1>
                <div className='singleList__row'>
                    <p className='watchlist__stock'>{list?.stocks}</p>
                </div>
                </>
            ))}
        </div>
    )
}


export default Watchlist;
