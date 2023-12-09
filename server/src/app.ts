import * as Koa from 'koa';
import * as Router from '@koa/router';

const app = new Koa();

export const apis = new Router();

apis.get('/', (ctx: Koa.BaseContext) => {
  const maxAge = ctx.query.max_age;
  ctx.headers['cache-control'] = `public, max-age=${maxAge || 10}`;
  ctx.body = 'Hello World!';
});

app.use(apis.routes()).use(apis.allowedMethods());

app.listen(3000, async () => { });