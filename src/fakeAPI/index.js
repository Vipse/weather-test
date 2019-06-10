export const forecastResponse = [
    {
        "request": "Amount of rainfall by day",
        "days": [
            {
                "day": 1,
                "amount": 50
            }, {
                "day": 2,
                "amount": 10
            }, {
                "day": 3,
                "amount": 10
            }, {
                "day": 4,
                "amount": 150
            }, {
                "day": 5,
                "amount": 130
            }, {
                "day": 6,
                "amount": 45
            }, {
                "day": 7,
                "amount": 10
            }
        ]
    }
];


const imitateConnection = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export const getMockForecast = () => imitateConnection(2000).then(()=>forecastResponse).catch(err=>console.log(err));
