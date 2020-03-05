module.exports = (api) => {
  const presets = [
    [
      '@babel/env', {
        targets: {
          ie: 11
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/typescript',
    '@babel/react'
  ]
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ]
  api.cache(false)
  return { presets, plugins }
}
