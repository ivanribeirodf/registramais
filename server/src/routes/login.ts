import { FastifyInstance } from 'fastify'
import { prima } from '../lib/prisma'

export async function login(app: FastifyInstance) {
  app.get('/login', async () => {
    const login = await prima.user.findUnique({
      where: {
        first_name: 'Ivan',
      },
    })

    return login
  })
}
