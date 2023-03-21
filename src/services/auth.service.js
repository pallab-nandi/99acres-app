const passport = require('passport');
const { userModel } = require('../models/users.model');
const localStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const { userService } = require("./users.service")

const signUp = (user) => {
  return userService.createUser(user);
}

const loginStrategy = new localStrategy({
  usernameField: 'email',
  passwordField: 'password'
})

passport.use('login', loginStrategy, async (email, password, done) => {
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) return done(null, false, { message: 'User not found' });
    const validPass = await user.isValidPass(password);
    if (!validPass) done(null, false, { message: 'Password is not matched' });
    return done(null, false, 'User loggedIn successfully');
  } catch (err) {
    console.log(err);
    done(err);
  }
})

passport.use(new JWTStrategy(
  {
    secretOrKey: 'genshin',
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('genshin')
  },
  async (token, done) => {
    try {
      return done(null, token);
    } catch (err) {
      console.log(err);
      done(err);
    }
  }
))

module.exports = { signUp }