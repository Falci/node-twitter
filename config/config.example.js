const path = require("path"),
  rootPath = path.normalize(__dirname + "/..");
module.exports = {
  development: {
    db: "",
    root: rootPath,
    app: {
      name: "Node Twitter",
    },
    auth: {
      domain: {
        callbackURL: "/auth/domain/callback",
        authenticator: "http://auth.sinpapeles/login",
      },
    },
    github: {
      clientID: "",
      clientSecret: "",
      callbackURL: "",
    },
  },
  test: {
    db: "",
    root: rootPath,
    app: {
      name: "Node Twitter",
    },
    auth: {
      domain: {
        callbackURL: "/auth/domain/callback",
        authenticator: "http://auth.sinpapeles/login",
      },
    },
    github: {
      clientID: "",
      clientSecret: "",
      callbackURL: "",
    },
  },
  production: {
    db: "",
    root: rootPath,
    app: {
      name: "Node Twitter",
    },
    auth: {
      domain: {
        callbackURL: "/auth/domain/callback",
        authenticator: "http://auth.sinpapeles/login",
      },
    },
    github: {
      clientID: "",
      clientSecret: "",
      callbackURL: "",
    },
  },
};
