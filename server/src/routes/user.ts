import { FastifyInstance } from 'fastify'
import { prima } from '../lib/prisma'
import { z } from 'zod'
import { request } from 'http'

export async function userCreate(app: FastifyInstance) {
  app.get('/listUser', async () => {
    const user = await prima.user.findMany({
      orderBy: {
        first_name: 'asc',
      },
    })
    return user
  })

  app.get('/listUser/:id', async (request) => {
    const paramSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramSchema.parse(request.params)

    const user = await prima.user.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return user
  })

  app.post('/userCreate', async (request) => {
    const bodySchema = z.object({
      first_name: z.string(),
      last_name: z.string(),
      email: z.string(),
      password: z.string(),
      password_confirm: z.string(),
    })

    const { first_name, last_name, email, password, password_confirm } =
      bodySchema.parse(request.body)

    const user = await prima.user.create({
      data: {
        first_name,
        last_name,
        email,
        password,
        password_confirm,
      },
    })

    return user
  })

  app.put('/user/:id', async () => {})

  app.delete('/user', async () => {})
}
