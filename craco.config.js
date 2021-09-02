import CracoLessPlugin from 'craco-less';

export const style = {
  postcss: {
    plugins: [require('tailwindcss'), require('autoprefixer')]
  }
};
export const plugins = [
  {
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': 'rgb(0, 82, 204)',
            '@font-size-base': '14px'
          }
        }
      }
    }
  }
];
