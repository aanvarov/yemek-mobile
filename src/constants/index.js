export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://yemek.alitechbot.uz';
// ? 'https://33f9-82-215-99-195.ngrok.io'

export const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TEXT_COLOR: '#263238',
  LIGHT_GREEN: '#4CCD7F',
  DARK_GREEN: '#09B44D',
  GREEN: '#54DD8A',
  SUBTITLE_COLOR: '#979797',
  BORDER_COLOR: '#E8E8E8',
};

export const STYLE_CONFIGS = {
  PAGE: {
    PADDING_VERTICAL: 15,
    PADDING_HORIZONTAL: 30,
  },
};
