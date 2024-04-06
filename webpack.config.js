module.exports = {
    resolve: {
      fallback: {
        "url": false
      }
    }
};

const path = require('path');

module.exports = {
  // Other webpack configuration options...

  resolve: {
    alias: {
      'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
    },
  },
};