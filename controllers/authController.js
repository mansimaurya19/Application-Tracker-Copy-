const register = async  (req,res) => {
    console.log('register user')
    res.send('register user')
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
