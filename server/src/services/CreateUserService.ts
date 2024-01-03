import prismaClient from "../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({firstname, lastname, email, password} : UserRequest){
    //Verify email
    if(!email) {
      throw new Error("Email incorrect!")
    }
    //Verify user already exists
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })
    //Erro user already exists
    if(userAlreadyExists){
      throw new Error("User already exists!")
    }
    const passwordHash = await hash(password,8)

    //create user
    const user = await prismaClient.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: passwordHash
      },
      select:{
        id: true,
        firstname: true,
        lastname: true,
        email: true
      }
    })
    return user
  }

}
export { CreateUserService }