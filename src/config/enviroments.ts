export default () => ({
  token: {
    jsonSecret: process.env.JSON_KEY,
    jsonExpiresIn: process.env.JSON_EXPIRES_IN || '2h',
  },
});
