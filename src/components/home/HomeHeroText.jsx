import React from 'react';

function HomeHeroText() {
    return (
        <div className='font-[font2] pt-5 text-center text-blue-50'>
            <div className='text-[9vw] justify-center flex items-center uppercase leading-[9vw]'>
                Letincelle
            </div>

            <div className='text-[9vw] justify-center flex items-center uppercase leading-[9vw]'>
                qui 
                <div className='h-[100px] w-[210px] rounded-full overflow-hidden mx-4 bg-black'>
                    <video
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source 
                            src="https://www.toyota.com/content/dam/toyota/vehicles/2026/tacoma/mlp/welcome/TAC_MY24_MLP_WELCOME_MAT_1920x796fs5mb_TYTQ1279000H.mp4?wid=1439"
                            type="video/mp4" 
                        />
                    </video>
                </div>
                genere
            </div>

            <div className='text-[9vw] justify-center flex items-center uppercase leading-[9vw]'>
                la creative
            </div>
        </div>
    )
}

export default HomeHeroText;
