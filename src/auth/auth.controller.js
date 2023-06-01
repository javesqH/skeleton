const { getUserByEmail } = require("../users/users.controllers")
const { comparePassword } = require('../utils/crypto')

const loginUser = async (email, password) => {
    try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return false
      } catch (err) {
        return false
      }
}

/* loginUser('javesq10@gmail.com', 'reoot')
    .then(response => console.log(response))
    .catch(err => console.log(err)) */

module.exports = {
    loginUser
}