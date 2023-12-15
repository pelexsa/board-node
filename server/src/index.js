// dotenv : 환경변수들을 파일에 넣고 사용 할 수 있게 해주는 개발용 모듈
require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI).then((response) => {
    console.log('Successfully connected to mongodb');
}).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4000;

app.use(bodyParser());

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('heurm server is listening to port ' + port);
});