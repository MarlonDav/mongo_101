import { User } from '../models/index.js'

export async function create(payload) {
  const { name, email, password } = payload
  const user = new User({
    name,
    email,
    password,
  })
  const newUser = await user.save()

  if (!newUser) {
    //return res.status(401).json ({ error :'Nies crear la data'})
    throw new Error('No se pudo crear el usuario')
  } return newUser

}

export async function getUserByEmail(email) {
  try {

    const [isExist] = await User.find({ email })

    if (!isExist) {
      throw new Error('No existe el usario')
    }

    return isExist

  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}

const userServi = {
  create,
  getUserByEmail,
}

export default userServi