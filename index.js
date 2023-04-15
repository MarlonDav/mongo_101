import ('./database/index.js')
import dontenv from 'dotenv'
dontenv.config()


import { PORT, api } from './api/index.js'

api.listen(PORT, () => console.log(`Estas en vivo ${PORT}` ))