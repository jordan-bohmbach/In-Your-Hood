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

    // funciton to grab and store name and items in an array  

    const getListItems = (x) => {
        for(let i = 0; i < watchlists?.length; i++){
            let single = watchlists[i]
            if(single?.name === x){
               return single.stocks
            }
        }
    }

    console.log(`!!!`, getListItems('Coffee'))

    // function to take the list of watchlist names and pop one off each time 
    // object with name key and value and ticker key with array of tickers able to map 

    const check = (id) => {
        const input = document.getElementById(id)
        console.log(`here`, id)
    }

   
    return (

    <div className='dash__watchlist-container'>

        <section class="accordion">
        <input type="checkbox" name="collapse2" id="handle3" />
        <h2 class="handle">
            <label for="handle3">Watchlist</label>
        </h2>
        <div class="content">
            {watchlists.map((list) => (
                <>
                <h1 class="handle">{list.name}</h1>
                <div >
                    {list.stocks.map((stock) => (
                        <div className='inner__content'>
                        <a className='stock__link'href={`/stock/${stock}`}><p>{stock}</p></a>
                        <div className='buttons'>
                            <button className='buttons' ><img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"/></button>
                            <button className='buttons' ><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/></button>
                        </div>    
                        </div>
                    ))}
                    <p></p>
                </div>
                </> 
            ))}

            
        </div>
        </section>


    </div>         

            
  
       
    )
}


export default Watchlist;
