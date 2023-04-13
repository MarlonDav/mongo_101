const { User } = require('../models')

module.exports={
    create: async(payload) => {
          const {name, email, password } = payload
            const user = new User ({
                 name,
                 email,
                 password,
            })
            const newUser = await user.save()




             if(!newUser){
                //return res.status(401).json ({ error :'Nies crear la data'})
                throw new Error('No se pudo crear el usuario')
            }return newUser

    },
    getUserByEmail: async(email) => {
        try {
            const isExist = await User.find({ email })
            if (!isExist){
                throw new Error('No se encontro el email')
            }

            return isExist[0]

        }catch (error){
            console.log(error)
            throw new Error(error.message)
        }
    }

    
}