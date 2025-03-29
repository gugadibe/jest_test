import {http, HttpResponse, } from 'msw';

export const handlers = [
    http.all('https://jsonplaceholder.typicode.com/users',() => {
        return HttpResponse.json([{name:"João"},{name:"Jorge"},{name:"Pedro"}])
    })
]