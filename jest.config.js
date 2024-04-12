module.exports = {
    // Specify transformation rules
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    // Ignore specific modules from transformation
    transformIgnorePatterns: [
      "node_modules/(?!(axios)/)"
    ],
    // Specify module file extensions
    moduleFileExtensions: [
      "js",
      "jsx",
      "json",
      "node",
      "mjs" // Add support for ECMAScript Modules
    ]
    // Add other configuration options as needed
  };
  