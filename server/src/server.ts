import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { userCreate } from './routes/user'

const app = fastify()
app.register(fastifyCors)
app.register(userCreate)

app
  .listen({
    port: 8000,
  })
  .then(() => {
    console.log('🚀 HTTP server running on <http://localhost:8000>')
  })
