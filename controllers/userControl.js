import { User } from '../models/index.js'
import { userServi } from '../services/index.js'
import { comparePassword, createToken } from '../utils/index.js'

export async function create(req, res) {

    try {
        const newUser = await userServi.create(req.body)

        console.log(newUser)

        if (!newUser) {
            //return res.status(401).json ({ error :'Nies crear la data'})
            throw new Error('No se pudo crear el usuario')
        }

        return res.status(200).json({ message: `Usuario creado con el id ${newUser._id}` })


    } catch (error) {
        return res.status(400).json({ error })
    }
}

export async function login(req, res) {
    console.log(req.body)
    try {
        const isUser = await userServi.getUserByEmail(req.body.email)

        if (!isUser) {
            throw new Error('No existe el usuario')
        }

        const isvalidPassword = comparePassword(isUser.password, req.body.password)
        if (!isvalidPassword) {
            throw new Error('Error en las credenciales')
        }

        const token = createToken(isUser)
        if (!token) {
            throw new Error('Error en el token')
        }
        const userWithoutPassword = {
            email: isUser.email,
            nombre: isUser.name,
            token
        }

        return res.status(200).json({ user: userWithoutPassword })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}


const userControl = {
    create,
    login
}

export default userControl