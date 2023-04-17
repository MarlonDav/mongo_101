import { Schema, model } from 'mongoose'
import { hash } from 'bcrypt'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    useType: {
        type: String,
        enum: ['admin','cliente']
    }
}, {
    timestamps: true
})

userSchema.pre('save', function(next){
    const user = this
    const SALT = 10

    if(!user.isModified('password')) return next()

    return hash(user.password, SALT, function(err, has){
        if(err){
            return next()
        }

        user.password = has
        return next()
    })

})

const User = model('User', userSchema)

export default { User }