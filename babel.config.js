module.exports = function(api) {
  
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset","babel-preset-expo"],
    plugins:[ ["nativewind/babel"],
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      ["@babel/plugin-proposal-optional-catch-binding"],
    ],
  };
};
