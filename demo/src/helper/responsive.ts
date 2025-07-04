import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;   // iPhone 11 width
const guidelineBaseHeight = 812;  // iPhone 11 height

// Horizontal scale
export const hscale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

// Vertical scale
export const vscale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

// Moderate scale (average of hscale and vscale)
export const mscale = (size: number, factor = 0.5) =>
    size + (hscale(size) - size) * factor;

// Responsive font size
export const fontSize = (size: number) => {
    const newSize = hscale(size);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
