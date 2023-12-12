const Router = require('koa-router');

const api = new Router();

api.get('/books', (ctx, next) => {
    ctx.body = 'GET' + ctx.request.body;
});

module.exports = api;