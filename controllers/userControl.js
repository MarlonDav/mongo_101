const { User } = require('../models')
const { userServi } =require('../services')
const { comparePassword } = require('../utils')





module.exports = {
    create: async(req, res) =>{
       
        try{
            const newUser = await userServi.create(req.body)

            console.log(newUser)

            if(!newUser){
                //return res.status(401).json ({ error :'Nies crear la data'})
                throw new Error('No se pudo crear el usuario')
            }

            return res.status(200).json({ message: `Usuario creado con el id ${newUser._id }`})


        } catch (error){
            return res.status(400).json({error})
        }
    },
    login: async (req, res) => {
        console.log(req.body)
        try {
            const isUser = await userServi.getUserByEmail(req.body.email)

            if(!isUser){
                 throw new Error('No existe el usuario')
            }

            const isvalidPassword = comparePassword(isUser.password, req.body.password)
                if(!isvalidPassword){
                    throw new Error ('Error en las credenciales')
                }
            

            return res.status(200).json({ message: isUser })

        }catch (error){
            return res.status(400).json({error: error.message})
        }
    }
}