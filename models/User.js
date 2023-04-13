const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')

const userSchema = new mongoose.Schema({
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

    return bcrypt.hash(user.password, SALT, function(err, has){
        if(err){
            return next()
        }

        user.password = has
        return next()
    })

})

const User = mongoose.model('User', userSchema)

module.exports = User