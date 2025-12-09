import React from 'react';

const Video = () => {
  return (
    <video
      className='h-full w-full object-cover'
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="https://www.toyota.com/content/dam/toyota/vehicles/2026/tacoma/mlp/welcome/TAC_MY24_MLP_WELCOME_MAT_1920x796fs5mb_TYTQ1279000H.mp4?wid=1439" type="video/mp4" />
      
    </video>
  );
};

export default Video;
