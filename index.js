const fastify = require('fastify')();

fastify.get('/', async function handler(request, reply) {
  return { hello: 'world' };
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  console.log('Server started on 3001');
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
