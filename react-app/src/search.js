// // import fetch from "node-fetch"
// const fetch = require('node-fetch')

// const finnhub = require('finnhub');

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "c4uiisiad3ie1t1fvu90"
// const finnhubClient = new finnhub.DefaultApi()

// const tickerSearch = async (searchVal) => {
//     const url = `https://www.https://finnhub.io/api/v1/search?q=${searchVal}&token=c4uiisiad3ie1t1fvu90`
//     const response = await fetch(url)
//     const json = await response.json()
//     return json
// }

// console.log(tickerSearch('AAPL'))

// const wrapper = async () => {
    
    // const search = async () => await finnhubClient.symbolSearch('AAPL', (error, data, response) => {
    //     return data
    // });

    // search()
        // .end(result => console.log(result))
// }

// console.log(wrapper())

// const getSearchResults = async() => {
//     let response = await fetch()
// }

// const getStockPrice = async (ticker) => {
//     let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=c27ut2aad3ic393ffql0`, { json: true })
//     let data = await res.json()
//     return data
// }