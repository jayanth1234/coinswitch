const url = "https://api.coinswitch.co/v2";

export function getCoins() {
    const coin = [];

    const coinOutput = fetch(`${url}/coins`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 't41E6v16mG6xqOUK74E2F7Py6UVng4K6n1pO3Jig',
            'x-user-ip': '1.1.1.1'
        }
    }).then(
        (result) =>  result.json(),
    ).then((result) => 
        coin.push(result.data)
    )

    return {
        type: "GET_COINS",
        payload: coin
    }
    
}

export function getRate() {
    const rate = [];

    const rateOutput = fetch(`${url}/rate`, {
        method: "Post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 't41E6v16mG6xqOUK74E2F7Py6UVng4K6n1pO3Jig',
            'x-user-ip': '1.1.1.1'
        },
        body: `{ "depositCoin":"btc","destinationCoin":"eth"}`
    }).then(
        (result) =>  result.json(),
    ).then((result) => 
        rate.push(result.data)
    )

    return {
        type: "GET_RATE",
        payload: rate
    }
    
}