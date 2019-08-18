export const applyMiddleware = (middleware, router) => {
  for (const f of middleware) {
    f(router);
  }
};

export const applyRoutes = (routes, router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router)[method](path, handler);
  }
};