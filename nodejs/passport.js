import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

const app = express();

// analyze the JSON body
app.use(express.json());

const SECRET_KEY = 'your-secret-key';
const users = [
  {
    id: 1,
    username: 'admin',
    password: 'password'
  }
];

// login with username and password
passport.use(
  new LocalStrategy((username, password, done) => {
    console.log(`Authenticating user: ${username}`);

    // find the user and compare the password
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return done(null, false, { message: 'Invalid username or password' });
    }
    return done(null, user);
  })
);

// check the JWT token
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
};

passport.use(
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    const user = users.find((u) => u.id === jwtPayload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false, { message: 'Invalid token' });
  })
);

// login route
app.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Authentication failed', info });
    }

    const token = jwt.sign({ id: user.id, name: user.username }, SECRET_KEY, {
      expiresIn: '1h'
    });
    return res.json({ message: 'Authentication successful', token });
  })(req, res, next);
});

// protected route
app.get(
  '/secret',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log('Secret route accessed', req.user);
    res.json({ message: 'Secret route accessed', user: req.user });
  }
);

app.listen(3000, () => console.log('Auth Server is running on port 3000'));
