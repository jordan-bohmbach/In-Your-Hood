const LOAD_PORTFOLIOS = 'portfolios/LOAD'
// const ADD_PORTFOLIO = 'portfolios/ADD'
// const REMOVE_PORTFOLIO = 'portfolios/REMOVE'
// const EDIT_PORTFOLIO = 'portfolios/EDIT'
// const ADD_TRADE_TO_PORTFOLIO = 'portfolios/trade'

const loadPortfolios = (portfolios) => ({
    type: LOAD_PORTFOLIOS,
    portfolios
})

// get all ports
export const getPortfolios = () => async(dispatch) => {
    const response = await fetch(`/api/portfolios`);
    const portfolioList = await response.json()
    console.log('portfolioList = ', portfolioList)
    dispatch(loadPortfolios(portfolioList))
}

export default function portfolioReducer(state={}, action){
    switch (action.type) {
        case LOAD_PORTFOLIOS:
            console.log(action)
            const newPortfolios = {}
            action['portfolios'].portfolios.forEach(portfolio => {
                newPortfolios[portfolio.id] = portfolio;
            })
            return {
                ...state,
                ...newPortfolios
            }

        default:
            return state
    }
}
