# Image Assets Guide

## Current Issue
Your Pinterest URLs may not work because:
1. Pinterest blocks hotlinking (direct image access from apps)
2. CORS (Cross-Origin Resource Sharing) restrictions
3. Network connectivity issues
4. Rate limiting

## Solutions

### Option 1: Use Reliable Image Services ✅
I've updated CookingScreen to use Picsum (Lorem Picsum) which is designed for placeholder images:
```jsx
source={{uri: "https://picsum.photos/400/800?random=1"}}
```

### Option 2: Local Images (Recommended) ⭐
1. Add your images to `assets/images/` folder
2. Use require() instead of uri:
```jsx
source={require('../assets/images/cooking-bg.jpg')}
```

### Option 3: Better External URLs
Use these reliable services:
- Unsplash Source: `https://source.unsplash.com/800x600/?cooking`
- Lorem Picsum: `https://picsum.photos/800/600?random=1`

## Next Steps
1. Test the updated CookingScreen with Picsum images
2. If it works, I can update all other screens
3. Or download your images and I'll help you set up local assets