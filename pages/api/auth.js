// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import jwt from 'jsonwebtoken'

// const authUser = {
//   userid: "wriddhi",
//   email: "wriddhihazra@gmail.com",
//   password: "password",
//   type: "teacher",
//   fullName: "Wriddhi Hazra",
//   subject: "Computer Science",
//   experience: "2 years",
//   address: "Kolkata",
//   qualification: "B. Tech.",
//   gender: "Male",
// }
const authUser = {
  userid: "arsinventif",
  email: "arsinventif@gmail.com",
  password: "password",
  type: "teacher",
  fullName: "ARS Inventif",
  subject: "Computer Science",
  experience: "7 years",
  address: "Kolkata",
  qualification: "M. Tech.",
  gender: "Male",
}

const authorize = (user) => {
  return (user.userid==authUser.userid && user.password==authUser.password && user.type==authUser.type)
}

const getToken = (auth, secret) => {
  if(auth){
    return jwt.sign({id: authUser.userid}, secret, {
      expiresIn: "15d",
    })
  }
  return null
}

export default function handler(req, res) {
  
  const user = req.query

  const auth = user ? authorize(user) : false

  const token = getToken(auth, user.password)

  const newUser = {...authUser, token: token}

  delete(newUser["password"])

  auth ? res.status(200).json(newUser) : res.status(401).json({Error: "Invalid login details! "})
}
