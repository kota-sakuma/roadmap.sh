import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'password123'
  }
];

// login with username and password
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    return user
      ? done(null, user)
      : done(null, false, { message: 'Invalid username or password' });
  })
);

// check the JWT token
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'default_secret'
    },
    (payload, done) => {
      const user = users.find((u) => u.id === payload.id);
      return user
        ? done(null, user)
        : done(null, false, { message: 'Invalid token' });
    }
  )
);
