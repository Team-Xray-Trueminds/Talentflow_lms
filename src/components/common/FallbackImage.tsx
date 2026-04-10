import React, { useState } from 'react';

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  seedName?: string;
  fallbackType?: 'landscape' | 'avatar' | 'course';
}

const FallbackImage: React.FC<FallbackImageProps> = ({ 
  src, 
  seedName, 
  fallbackType = 'landscape',
  className,
  alt,
  ...props 
}) => {
  const [error, setError] = useState(false);

  // Generate a seeded fallback URL
  const getFallbackUrl = () => {
    const seed = seedName || alt || 'talentflow';
    const cleanSeed = seed.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    if (fallbackType === 'avatar') {
       return `https://picsum.photos/seed/${cleanSeed}/200/200`;
    }
    if (fallbackType === 'course') {
       return `https://picsum.photos/seed/${cleanSeed}/1200/630`;
    }
    return `https://picsum.photos/seed/${cleanSeed}/800/450`;
  };

  const handleImageError = () => {
    if (!error) {
      setError(true);
    }
  };

  const finalSrc = error || !src ? getFallbackUrl() : src;

  return (
    <img 
      src={finalSrc} 
      alt={alt} 
      className={className}
      onError={handleImageError}
      {...props}
    />
  );
};

export default FallbackImage;
