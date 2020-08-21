const jwt = require('jsonwebtoken');

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  },
];

// check user login status {isAuth:true}
const isAuth = (req, res, next) => {
  if (!req.body.isAuth) return res.send({ message: 'Currently you are not login' });
  next();
};

// check user roles: "admin"
const userRoles = (req, res, next) => {
  if (!req.body.roles) return res.send({ message: 'Should have user roles' });
  if (!req.body.roles.includes('admin')) return res.send({ message: 'Your request not permitted' });
  next();
};

// GET aLL users
const getAllUSer = (req, res) => res.send({ users });

// CREATE new User

const createUSer = (req, res) => res.send({ message: 'Successfully create a new user' });

// DELETE a user
const deleteUSer = (req, res) => res.send({ message: 'Successfully Delete' });

// login user
const login = (req, res) => {
  const SECRET = 'MANIK';
  const payload = {
    _id: '2sdfsf3135464564dfgsfsdfs',
    email: 'test@gmail.com',
    firstName: 'Brad',
    lastName: 'Traversy',
  };
  const token = jwt.sign(payload, SECRET, { expiresIn: '24h' });
  return res.status(200).json({ token: `${token}`, status: 'success', message: 'Successfully Login' });
};

module.exports = {
  getAllUSer,
  isAuth,
  userRoles,
  createUSer,
  deleteUSer,
  login,
};
// token generate kore return
// what is mongodb, when use sql and when nosql, how mongo Work, mongo vs sql
