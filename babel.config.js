module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@hom/navigation': './src/navigation/stack.ts',
            "@hom/navigation-types": './src/navigation/types.ts',
          },
        },
      ]
    ],
  };
};
