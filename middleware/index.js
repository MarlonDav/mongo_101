import jwt from 'jsonwebtoken'


export function verifyToken(req, res, next) {
    try {
        console.log(req.headers)
        const { authorization } = req.headers
        console.log(authorization)



    } catch (error) {
        res.status(401).json({ message: 'No tienes permisos para ver este recurso', error: error.message })
    }
}