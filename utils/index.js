const bcrypt = require('bcrypt')

module.exports = {
    comparePassword: (hasPassword, reqPassword) => {
        const match = bcrypt.compareSync(reqPassword, hasPassword)

        return match

    }
}