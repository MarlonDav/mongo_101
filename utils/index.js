import { compareSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export function comparePassword(hasPassword, reqPassword) {
    const match = compareSync(reqPassword, hasPassword)

    return match

}
export function createToken(user) {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        exp: Math.floor(Date.now() / 1000) * (60 * 60)
    }
    try {

        const token = sign(payload, process.env.JWT_SECRET)
        return token
    } catch (error) {
        return error.message

    }


}