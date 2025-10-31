import React, { useState } from 'react';
import { Image, ImageProps, View, ActivityIndicator } from 'react-native';

interface OptimizedImageProps extends ImageProps {
  source: any;
  style: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  loadingColor?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  source, 
  style, 
  resizeMode = 'cover', 
  loadingColor = '#f0f0f0',
  ...props 
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[style, { backgroundColor: loadingColor }]}>
      <Image
        source={source}
        style={style}
        resizeMode={resizeMode}
        fadeDuration={200}
        progressiveRenderingEnabled={true}
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        {...props}
      />
      {loading && (
        <View style={[style, { 
          position: 'absolute', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: loadingColor 
        }]}>
          <ActivityIndicator size="small" color="#568366" />
        </View>
      )}
    </View>
  );
};