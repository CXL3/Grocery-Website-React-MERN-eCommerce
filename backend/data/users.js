import bcrypt from 'bcryptjs'

 const users = [
   {
     name: 'Admin User',
     email: 'admin@example.com',
     password: bcrypt.hashSync('123456', 10),
     isAdmin: true,
   },
   {
     name: 'Jane Love',
     email: 'Jane@example.com',
     password: bcrypt.hashSync('123456', 10),
   },
   {
     name: 'How Many',
     email: 'how@example.com',
     password: bcrypt.hashSync('123456', 10),
   },
 ]

 export default users