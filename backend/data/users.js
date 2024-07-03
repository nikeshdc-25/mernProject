import bcrypt from 'bcryptjs';

const users = [
    {
        "username": "Nepali",
        "email": "nepali@gmail.com",
        "password": bcrypt.hashSync("nepali", 10),
        "isAdmin": true,
    },
    {
        "username": "John.Doe",
        "email": "johndoe@gmail.com",
        "password": bcrypt.hashSync("johnDoe", 10),
        "isAdmin": false,
    },
    {
        "username": "Jane.Doe",
        "email": "janedoe@gmail.com",
        "password": bcrypt.hashSync("janeDoe", 10),
        "isAdmin": false,
    }
]

export default users;