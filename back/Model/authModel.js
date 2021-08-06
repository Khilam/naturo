const mongoose = require ('mongoose')
const Schema = mongoose.Schema
// import bcrypt from 'bcryptjs'

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    adresse:{
        type:String,
        required:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
    // isAdmin: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  },
//   {
//     timestamps: true,
//   },
)

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }

//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

module.exports = mongoose.model('Auth', authSchema)

// default Auth
