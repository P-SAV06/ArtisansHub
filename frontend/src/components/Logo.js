import React, { useState } from 'react';

const Logo = ({ 
  width = "120", 
  height = "40", 
  className = ""
}) => {
  const [imageError, setImageError] = useState(false);
  const logoSrc = "/logo.jpg?v=" + Date.now();
  
  const handleImageError = () => {
    console.log('Logo failed to load:', logoSrc);
    setImageError(true);
  };

  if (imageError) {
    return (
      <div 
        className={`logo-fallback ${className}`} 
        style={{
          width: width + 'px',
          height: height + 'px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        🎨 Artisans Hub
      </div>
    );
  }
  
  return (
    <img 
      src={logoSrc}
      alt="Artisans Hub Logo" 
      style={{
        width: width + 'px',
        height: height + 'px',
        objectFit: 'contain',
        maxWidth: '100%',
        display: 'block'
      }}
      className={`logo ${className}`}
      onError={handleImageError}
    />
  );
};

export default Logo;