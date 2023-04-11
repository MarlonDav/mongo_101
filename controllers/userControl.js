const { User } = require('../models')





module.exports = {
    create: async(req, res) =>{
        const {name, email, password } = req.body
        try{
            const user = new User ({
                 name,
                 email,
                 password,
            })
            const newUser = await user.save()

            console.log(newUser)

            if(!newUser){
                //return res.status(401).json ({ error :'Nies crear la data'})
                throw new Error('No se pudo crear el usuario')
            }

            return res.status(200).json({ message: newUser})


        } catch (error){
            return res.status(400).json({error})
        }
    }
}