const deutschStocks = ['Mercedes', "BMW"];

const usaStocks = ['Apple', "IBM"];

export const stocks = [...deutschStocks, ...usaStocks];


let user = {
    name: "Jack",
    age: 39,
}

export const extendUser = {
    isAdmin: true,
    ...user
}