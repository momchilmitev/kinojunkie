const fastify = require('fastify')();
const mongodb = require('@fastify/mongodb');

fastify.register(mongodb, {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,

  url: 'mongodb://root:root@kinojunkie-mongo:27017',
});

fastify.get('/', async function handler(request, reply) {
  return { hello: 'world' };
});

fastify.get('/movies', async function handler(request, reply) {
  const moviesDb = this.mongo.client.db('kinojunkie');
  const moviesCollection = moviesDb.collection('movies');
  const moviesCursor = moviesCollection.find({});
  const movies = await moviesCursor.toArray();
  return movies;
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  console.log('Server started on 3000');
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
