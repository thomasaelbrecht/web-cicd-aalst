module.exports = {
  log: {
    level: 'info',
    disabled: false,
  },
  cors: {
    origins: [
      'http://localhost:3000',
      'https://thomasaelbrecht.github.io/frontend-cicd-aalst/'
    ],
    maxAge: 3 * 60 * 60, // 3h in seconds
  },
  database: {
    client: 'mysql2',
    host: 'localhost',
    port: 3306,
    name: 'budget',
  },
  pagination: {
    limit: 100,
    offset: 0,
  },
  auth: {
    argon: {
      saltLength: 16,
      hashLength: 32,
      timeCost: 6,
      memoryCost: 2 ** 17,
    },
    jwt: {
      // secret comes via env
      expirationInterval: 3 * 24 * 60 * 60 * 1000, // ms (3 days)
      issuer: 'budget.hogent.be',
      audience: 'budget.hogent.be',
    },
  },
};
