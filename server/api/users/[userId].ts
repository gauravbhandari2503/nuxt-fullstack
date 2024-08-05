import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Get the userId from the route parameters
  const userId: string | undefined = event?.context?.params?.userId

  // Fetch the user from the database
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(userId as string, 10),  // Ensure the ID is an integer
    },
  })

  // If the user is not found, return a 404 response
  if (!user) {
    return {
      status: 404,
      body: 'User not found',
    }
  }

  // Return the user data
  return user
})
