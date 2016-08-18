import path from 'path';

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const NODE_DIR = path.resolve(__dirname, 'node_modules');

export default {
  entry: {
    index: path.resolve(SRC_DIR, 'index.js'),
  },

  output: {
    path: DIST_DIR,
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /src/,
        loader: 'babel',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      SRC_DIR,
      NODE_DIR,
    ],
  },
};
