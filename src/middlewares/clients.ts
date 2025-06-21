export default () => {
  return async (ctx, next) => {
    const start = Date.now();

    await next();

    const delta = Math.ceil(Date.now() - start);
    const user = ctx.state.user;

    console.log(user);
    ctx.set('X-Response-Time', delta + 'ms');
  };
};