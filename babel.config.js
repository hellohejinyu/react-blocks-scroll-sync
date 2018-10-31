module.exports = (api) => {
  const presets = [
    "@babel/react",
    "@babel/preset-typescript",
    [
      "@babel/env", {
        "targets": {
          "ie": "11"
        },
        "useBuiltIns": "usage"
      }
    ]
  ];

  const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
  api.cache(false);

  return { presets, plugins };
}