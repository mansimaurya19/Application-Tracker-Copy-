import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'


const register = async  (req,res) => {
     //console.log(req.body)
       const users = await User.create(req.body)
       res.status(StatusCodes.OK).json({ users })
}

const login = async (req,res) => {
    console.log('login user')
    res.send('login user')
}


const updateUser = async  (req,res) => {
    console.log('update user')
    res.send('update user')
}

export { register, login, updateUser }
