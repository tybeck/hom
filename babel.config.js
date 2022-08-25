module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@hom/fonts': './assets/fonts/index.ts',
            '@hom/common': './src/components/common/index.ts',
            '@hom/support': './src/support/index.tsx',
            '@hom/theme': './src/theme/index.ts',
            '@hom/store': './src/store/index.ts',
            '@hom/navigation': './src/navigation/index.tsx',
            '@hom/navigation-types': './src/navigation/types.ts',
            '@hom/navigation-linking-options': './src/navigation/linking-options.ts',
            '@hom/preload': './src/preload/index.ts',
            '@hom/pages': './src/components/pages/index.ts',
            '@hom/layout': './src/components/layout/index.ts',
            '@hom/hooks': './src/hooks/index.ts',
            '@hom/utils': './src/utils/index.ts',
            '@hom/types': './src/types/index.ts',
            '@hom/svg': './src/svg/index.ts',
            '@hom/apollo': './src/apollo/client.ts',
            '@hom/queries': './src/apollo/generated.tsx',
            '@hom/assets': './assets/index.ts',
            '@hom/context': './src/context/index.ts',
            '@hom/modals': './src/components/modals/index.tsx',
          },
        },
      ]
    ],
  };
};
