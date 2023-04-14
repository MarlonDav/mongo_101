
import express , { urlencoded, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../routes/index.js'


const api = express()
const PORT = process.env.PORT  || 4000  ;


api.use(cors())
api.use(morgan('dev'))
api.use(urlencoded({ extended: true}))
api.use(json({ extended: true }))

api.get('/',(req, res) => res.send('Hola mundo'))
api.use('/api/v1', router )

export { api, PORT }



