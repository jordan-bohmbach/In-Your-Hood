
const LOAD_WATCHLISTS = 'watchlists/LOAD'
// const ADD_WATCHLIST = 'watchlists/ADD'
// const REMOVE_WATCHLIST = 'watchlists/REMOVE'
// const EDIT_WATCHLIST = 'watchlists/EDIT'
// const ADD_TRADE_TO_WATCHLIST = 'watchlists/trade'

const loadWatchlists = (watchlists) => ({
    type: LOAD_WATCHLISTS,
    watchlists
})

export const getWatchlists = () => async (dispatch) => {
    const response = await fetch(`/api/watchlists`);
    const watchlistList = await response.json()
    console.log('watchlistList = ', watchlistList)
    dispatch(loadWatchlists(watchlistList))
}

export default function watchlistReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_WATCHLISTS:
            console.log(action)
            const newWatchlists = {}
            action['watchlists'].watchlists.forEach(watchlist => {
                newWatchlists[watchlist.id] = watchlist;
            })
            return {
                ...state,
                ...newWatchlists
            }

        default:
            return state
    }
}