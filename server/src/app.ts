import * as Koa from 'koa';
import * as Router from '@koa/router';

const app = new Koa();

export const apis = new Router();

apis.get('/', (ctx) => {
  ctx.body = 'Hello World!';
});

app.use(apis.routes()).use(apis.allowedMethods());

app.listen(3000, async () => { });