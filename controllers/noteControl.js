const { Note } = require ('../models')
const { noteServi } = require ('../services')

module.exports = {
    create: async(req, res) =>{
        const { titulo, contenido, fecha, user } = req.body
        try{
        
            const newNote = await noteServi.create(req.body)

           

            if(!newNote){
                //return res.status(401).json ({ error :'Nies crear la data'})
                throw new Error('No se pudo crear la nota')
            }

            return res.status(200).json({ message: newNote})


        } catch (error){
            return res.status(400).json({error})
        }
    },
    getAllNotes: async (req, res) => {
        try {
            const allnotes = await noteServi.getAllNotes()

            return res.status(200).json({ message: allnotes })

        } catch (error){
            return res.status(400).json({ error })
        }
    }
}