import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import { getWatchlists, createOneWatchlist, updateWatchlist, deleteWatchlist } from '../../store/watchlist';

import './Watchlist.css'

function Watchlist(){
    const dispatch = useDispatch()
    const watchlists = useSelector((state) => Object.values(state.watchlists))
    // const session = useSelector((state) => state.session)

    useEffect(() => {
        dispatch(getWatchlists());
    }, [dispatch]);

    const handleDelete = () => {
        dispatch(deleteWatchlist(Number(watchlists.id)))
        // console.log(watchlists.id)
    }

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
            <button className="deleteWatchlist" onClick={() => handleDelete(watchlists?.id)}>Delete</button>
        </div>
    )
}


export default Watchlist;
