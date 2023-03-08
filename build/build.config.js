module.exports = {
  dll: {
    dev: {
      cache: '.cache/dll/dev',
      entry: {
        vendor: ['react', 'react-dom', 'react-color', 'antd', 'classnames', 'i18next', 'react-i18next', 'lodash', '@ant-design/icons', '@antv/g2plot'],
      },
    },
    prod: {
      cache: '.cache/dll/prod',
      entry: {
        vendor: ['react', 'react-dom', 'react-color', 'antd', 'classnames', 'i18next', 'react-i18next', 'lodash', '@ant-design/icons', '@antv/g2plot'],
      },
    },
  },
};