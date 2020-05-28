module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        database: 'test',
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});