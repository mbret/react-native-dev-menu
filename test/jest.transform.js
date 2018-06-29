module.exports = require('babel-jest').createTransformer({
  // sourcemaps does not seems to works but retainLines will keep
  // correct line number (while producing weird code sometimes)
  sourceMaps: true,
  retainLines: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/preset-flow'
  ]
})