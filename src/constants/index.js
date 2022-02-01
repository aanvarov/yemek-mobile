export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api.todo.com';

export const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TEXT_COLOR: '#263238',
  LIGHT_GREEN: '#4CCD7F',
  DARK_GREEN: '#09B44D',
  GREEN: '#54DD8A',
};

export const STYLE_CONFIGS = {
  PAGE: {
    PADDING_VERTICAL: 15,
    PADDING_HORIZONTAL: 22,
  },
};
