require('dotenv').config()
require('./database')


const { PORT, api } = require ('./api')

api.listen(PORT, () => console.log(`Estas en vivo ${PORT}` ))