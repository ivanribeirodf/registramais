import { PrismaClient } from '@prisma/client'

export const prima = new PrismaClient({
  log: ['query'],
})
