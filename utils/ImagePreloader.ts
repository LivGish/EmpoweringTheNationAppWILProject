// Image Preloader Utility
import { Image } from 'react-native';

// List of all images to preload
const imagesToPreload = [
  require('../assets/images/backgrounds/main-bg.png'),
  require('../assets/images/courses/child-minding.jpg'),
  require('../assets/images/courses/cooking.png'),
  require('../assets/images/courses/first-aid.jpg'),
  require('../assets/images/courses/garden-maintenance.jpg'),
  require('../assets/images/courses/graduates.png'),
  require('../assets/images/courses/landscaping.png'),
  require('../assets/images/courses/life-skills.png'),
  require('../assets/images/courses/sewing.png'),
  require('../assets/images/logo.png'),
];

export const preloadImages = async () => {
  try {
    // Simple preloading without prefetch for local images
    imagesToPreload.forEach((imageSource) => {
      // Just reference the images to ensure they're loaded by the bundler
      const source = Image.resolveAssetSource(imageSource);
      console.log('Preloading image:', source.uri);
    });
    return Promise.resolve();
  } catch (error) {
    console.log('Image preloading error:', error);
    return Promise.resolve(); // Don't fail the app if preloading fails
  }
};