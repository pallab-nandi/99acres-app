const authService = require('../services/auth.service');

const passport = require('passport');
const jwt = require('jsonwebtoken');

async function signUp(req, res) {

  const user = req.body;

  return await authService
    .signUp(user)
    .then((data) => {
      console.log(data);
      res.setHeader('content-type', 'application/json');
      res.writeHead(201);
      let returnValues = {};
      returnValues.status = 'success';
      returnValues.message = 'User registered successfully';
      returnValues.data = data;
      res.end(JSON.stringify(returnValues));
    })
    .catch((err) => {
      console.log(err);
      res.setHeader('content-type', 'application/json');
      res.writeHead(500);
      res.end(JSON.stringify({
        status: 'failed',
        message: 'Server Error'
      }))
    })
}

async function login(req, res) {

  passport.authenticate(
    'login',
    async (err, user, info) => {
      try {
        if (err || !user) {
          return res.status(404).json({
            status: 'fail',
            message: 'Something went wrong'
          })
        }
        req.login(
          user,
          { session: false },
          async (err) => {
            if (err) return next(err);
            const body = {
              _id: user._id,
              email: user.email,
              roles: user.roles
            }
            const token = jwt.sign(
              body,
              'genshin',
              {
                expiresIn: 84600000
              }
            )
            return res.status(200).json({
              status: 'success',
              message: 'User loggedIn successfully',
              accesstoken: `Bearer ${token}`
            })
          }
        )
      } catch (err) {
        console.log(err);
      }
    }
  )(req, res);

}

module.exports = { signUp, login }