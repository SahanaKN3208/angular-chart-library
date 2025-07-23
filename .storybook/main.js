module.exports = {
  stories: ['../projects/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  staticDirs: ["../projects/angular-charts/src"],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
};
