module.exports = {
  dll: {
    dev: {
      cache: '.cache/dll/dev',
      entry: {
        vendor: ['react', 'react-dom'],
      },
    },
    prod: {
      cache: '.cache/dll/prod',
      entry: {
        vendor: ['react', 'react-dom'],
      },
    },
  },
};