import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import * as path from 'path'
import FileManagerPlugin from 'filemanager-webpack-plugin'

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
});

rules.push({
  test: /\.(?:ico|gif|svg|png|jpg|jpeg|webp)$/,
  include: [
    path.resolve(__dirname, "public/assets")
  ],
  type: "asset/inline"
})

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.join(__dirname, '.webpack/renderer/main_window'),
              destination: path.join(__dirname, 'out/dist/main_window')
            }
          ]
        }
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
