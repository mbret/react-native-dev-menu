/**
 *
 */
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript'
import json from 'rollup-plugin-json'

module.exports = {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    interop: false,
    esModule: false,
    strict: false,
    sourcemap: true
  },
  external: ['react', 'hoist-non-react-statics', 'react-native', 'memoize-one'],
  // experimentalCodeSplitting: true,
  plugins: [
    json(),
    typescript(),
    babel({
      babelrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            'useBuiltIns': 'entry',
            'targets': {
              'browsers': [
                'last 1 chrome versions'
              ]
            }
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-flow-strip-types'
      ]
    })
  ]
}
