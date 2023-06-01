const bcrypt = require('bcrypt');

const  hashPassword = (plainPassword) => {
     const hashPassword = bcrypt.hashSync(plainPassword, 10)
     return hashPassword
}

const comparePassword = (plainPassword, hashedPassword) => {
     return bcrypt.compareSync(plainPassword, hashedPassword)
}

//console.log(hashPassword('root'))

//console.log(comparePassword('root', '$2b$10$3NHxtK5zCYFNNmbLBVQgtuExQPT9/2iV30UJzck/wBwZcqXRYZ9b2'))

module.exports = {
    hashPassword,
    comparePassword
}