import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <DotLottieReact
        src="https://lottie.host/e6b36637-56bc-4e05-9c93-70c4a1a125c7/8Q3ffIGUnE.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LoadingScreen;