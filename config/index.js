const NODE_ENV = process.env.NODE_ENV || 'production'

const config = {
    develop: {
        MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@devf-test.n170yfl.mongodb.net/develop?retryWrites=true&w=majority`
    },
    production: {
        MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@devf-test.n170yfl.mongodb.net/production?retryWrites=true&w=majority`
    }
}

const URL = config[NODE_ENV]
export  {URL}
