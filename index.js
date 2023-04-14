import ('dotenv').config()
import ('./database')


import { PORT, api } from './api/index.js'

api.listen(PORT, () => console.log(`Estas en vivo ${PORT}` ))